const express = require('express')
const mongoose = require('mongoose')
const User = require("./Models/user.model.js");
const userRoute = require("./Routes/user.route.js");
const Caller = require("./Models/caller.model.js")
const callerRoute = require("./Routes/caller.route.js")
const Call = require("./Models/call.model.js")
const callRoute = require("./Routes/call.route.js")
const Ticket = require("./Models/ticket.model.js")
const ticketRoute = require("./Routes/ticket.route.js")
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/users", userRoute);
app.use("/api/callers", callerRoute);
app.use("/api/calls", callRoute);
app.use("/api/tickets", ticketRoute);


app.get("/", (req, res) => {
    res.send("Hello from the Backend Server!")
})

mongoose.connect("<Your URL Here")
.then(() => {
    console.log("Connected to Database!")
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
})
.catch(() => {
    console.log("Connection Failed!")
})