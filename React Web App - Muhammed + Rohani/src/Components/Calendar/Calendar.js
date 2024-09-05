import React, { Component } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/en-gb"; 
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import Box from "@mui/material/Box";
import Calendar from "react-calendar"; 
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-calendar/dist/Calendar.css"; 
import "./Calendar.css"; 


moment.locale("en-gb");
const localizer = momentLocalizer(moment);

class CalendarWithSidebar extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            title: "",
            start: null,
            end: null,
            desc: "",
            color: "#3174ad", 
            openSlot: false,
            openEvent: false,
            clickedEvent: {},
            selectedDate: new Date(),
            notes: [], 
            newNote: "", 
        };
    }

    handleClose = () => {
        this.setState({ openEvent: false, openSlot: false });
    };

    handleSlotSelected = (slotInfo) => {
        const start = moment(slotInfo.start);
        const end = moment(slotInfo.end); 

        this.setState({
            title: "",
            desc: "",
            start: start,
            end: end, 
            color: "#3174ad", 
            openSlot: true,
        });
    };

    handleEventSelected = (event) => {
        this.setState({
            openEvent: true,
            clickedEvent: event,
            start: moment(event.start),
            end: moment(event.end),
            title: event.title,
            desc: event.desc,
            color: event.color || "#3174ad", 
        });
    };

    setTitle = (e) => {
        this.setState({ title: e.target.value });
    };

    setDescription = (e) => {
        this.setState({ desc: e.target.value });
    };

    handleStartTime = (date) => {
        if (moment(date).isValid()) {
            const start = moment(date);
            let end = this.state.end;

            if (!end || start.isSameOrAfter(end)) {
                end = moment(start).add(1, 'hours'); 
            }

            this.setState({ start, end });
        }
    };

    handleEndTime = (date) => {
        if (moment(date).isValid()) {
            const end = moment(date);
            this.setState({ end });
        }
    };

    handleColorChange = (color) => {
        this.setState({ color });
    };

    setNewAppointment = () => {
        const { start, end, title, desc, color } = this.state;
        if (start && end && title) {
            let appointment = { title, start: start.toDate(), end: end.toDate(), desc, color, id: moment().valueOf() };
            this.setState((prevState) => ({
                events: [...prevState.events, appointment],
                openSlot: false,
                title: "",
                desc: "",
                start: null,
                end: null,
                color: "#3174ad", 
            }));
        }
    };

    updateEvent = () => {
        const { title, desc, start, end, color, events, clickedEvent } = this.state;
        if (start && end && title) {
            const updatedEvents = events.map((event) =>
                event.id === clickedEvent.id ? { ...event, title, desc, start: start.toDate(), end: end.toDate(), color } : event
            );
            this.setState({ events: updatedEvents, openEvent: false });
        }
    };

    deleteEvent = () => {
        const { events, clickedEvent } = this.state;
        const updatedEvents = events.filter((event) => event.id !== clickedEvent.id);
        this.setState({ events: updatedEvents, openEvent: false });
    };

    eventStyleGetter = (event) => {
        const backgroundColor = event.color || "#3174ad"; 
        const style = {
            backgroundColor: backgroundColor,
            borderRadius: '5px', 
            border: 'none', 
            color: 'white', 
            padding: '10px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%', 
        };
        return {
            style: style,
        };
    };

    renderColorPicker() {
        const colors = [
            { color: "#f44336", name: "Red" },
            { color: "#2196f3", name: "Blue" },
            { color: "#ffeb3b", name: "Yellow" },
            { color: "#4caf50", name: "Green" },
        ];

        return (
            <div className="color-picker-container">
                {colors.map((c) => (
                    <div
                        key={c.name}
                        onClick={() => this.handleColorChange(c.color)}
                        className={`color-circle ${this.state.color === c.color ? 'selected' : ''}`}
                        style={{ backgroundColor: c.color }}
                    />
                ))}
            </div>
        );
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    handleNoteChange = (e) => {
        this.setState({ newNote: e.target.value });
    };

    addNote = () => {
        const { newNote, notes } = this.state;
        if (newNote.trim()) {
            this.setState({
                notes: [...notes, newNote],
                newNote: "",
            });
        }
    };

    deleteNote = (index) => {
        this.setState((prevState) => {
            const notes = [...prevState.notes];
            notes.splice(index, 1);
            return { notes };
        });
    };

    renderNotesSection() {
        const { notes, selectedDate } = this.state;
        const selectedDateStr = moment(selectedDate).format("DD/MM/YYYY");
        const filteredEvents = this.state.events.filter(event =>
            moment(event.start).isSame(selectedDate, 'day')
        );

        return (
            <div className="notes-section">
                <h3>{selectedDateStr}</h3>
                {filteredEvents.map((event, index) => (
                    <div key={index} className="event-note">
                        <p>{event.title} : {moment(event.start).format("h:mm a")} - {moment(event.end).format("h:mm a")}</p>
                        <p>{event.desc}</p>
                    </div>
                ))}
                <TextField
                    value={this.state.newNote}
                    onChange={this.handleNoteChange}
                    placeholder="Add a note"
                    fullWidth
                    margin="normal"
                />
                <Button onClick={this.addNote} color="primary" variant="contained">
                    Add Note
                </Button>
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>
                            {note}
                            <Button onClick={() => this.deleteNote(index)} color="secondary">
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <div className="app-container">
                    <div className="sidebar">
                        <Calendar
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                        />
                        {this.renderNotesSection()}
                    </div>
                    <div id="Calendar">
                        <BigCalendar
                            localizer={localizer}
                            events={this.state.events}
                            views={["month", "week", "day"]}
                            timeslots={4} 
                            step={15} 
                            defaultView="month"
                            date={this.state.selectedDate} 
                            onNavigate={(date) => this.setState({ selectedDate: date })} 
                            selectable={true}
                            onSelectEvent={this.handleEventSelected}
                            onSelectSlot={this.handleSlotSelected}
                            eventPropGetter={this.eventStyleGetter}
                        />
                    </div>

                    <Dialog open={this.state.openSlot || this.state.openEvent} onClose={this.handleClose}>
                        <h2>
                            {this.state.openSlot ? "Book an appointment" : "View/Edit Appointment"} on {moment(this.state.start).format("MMMM Do YYYY")}
                        </h2>
                        <Box component="form" sx={{ '& > :not(style)': { m: 2 } }}>
                            <TextField
                                label="Title"
                                value={this.state.title}
                                onChange={this.setTitle}
                                fullWidth
                            />
                            <TextField
                                label="Description"
                                multiline
                                value={this.state.desc}
                                onChange={this.setDescription}
                                fullWidth
                            />
                            <TimePicker
                                label="Start Time"
                                value={this.state.start}
                                onChange={this.handleStartTime}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                            <TimePicker
                                label="End Time"
                                value={this.state.end}
                                onChange={this.handleEndTime}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </Box>
                        <div style={{ marginTop: 20 }}>
                            <p>Select Event Color:</p>
                            {this.renderColorPicker()}
                        </div>
                        <div className="dialog-buttons">
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            {this.state.openEvent && (
                                <Button onClick={this.deleteEvent} color="secondary">
                                    Delete
                                </Button>
                            )}
                            <Button onClick={this.state.openSlot ? this.setNewAppointment : this.updateEvent} color="primary">
                                {this.state.openSlot ? "Submit" : "Confirm Edit"}
                            </Button>
                        </div>
                    </Dialog>
                </div>
            </LocalizationProvider>
        );
    }
}

export default CalendarWithSidebar;