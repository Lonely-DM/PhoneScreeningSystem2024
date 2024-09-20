import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './AIInsights.css'; // Import your custom CSS file
import logo from './logo.png'; 

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const AIInsights = () => {
    const monthlyCallsData = {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Monthly Calls',
            data: [120, 90, 150, 200, 180, 210, 300, 270, 220, 250, 230, 280],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    const ticketStatusData = {
        labels: ['Resolved', 'In-Progress'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
        }],
    };

    const contactBreakdownData = {
        labels: ['Phone', 'Email', 'In-Person', 'Online Form'],
        datasets: [{
            data: [50, 25, 15, 10],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1,
        }],
    };

    const reportedIssuesData = {
        labels: ['Emotional', 'Financial', 'Family Care', 'Social Abuse', 'PoF', 'Senior Cards', 'Physical Abuse', 'Aged Care'],
        datasets: [{
            label: 'Reported Issues',
            data: [45, 32, 20, 18, 12, 7, 40, 25],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        }],
    };

    const raisedTicketData = {
        labels: ['Last Week', 'Last Month'],
        datasets: [{
            data: [20, 100],
            backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
        }],
    };

    const feedbackData = {
        labels: ['Satisfied', 'Neutral', 'Dissatisfied'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 12, // Adjust font size
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    },
                },
            },
        },
    };

    return (
        <div className="container">
            <main className="main-content">
                <header className="header">
                <div className="header-left">
            <a href="/dashboard" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />
                <h1><b>AI-Insights</b></h1>
            </a>
        </div>

                    <div className="header-right">
                        <button className="icon-btn">
                            <i className="bi bi-bell"></i>
                        </button>
                        <button className="icon-btn">
                            <i className="bi bi-envelope"></i>
                        </button>
                        <button className="icon-btn">
                            <i className="bi bi-person-circle"></i>
                        </button>
                        <button className="icon-btn">
                            <i className="bi bi-gear"></i>
                        </button>
                    </div>
                </header>
                <section className="charts">
                    <div className="chart-container">
                        <h2>Total Monthly Calls</h2>
                        <Bar data={monthlyCallsData} options={options} />
                    </div>
                    <div className="chart-container">
                        <h2>Raised Ticket Status</h2>
                        <Pie data={ticketStatusData} options={options} />
                    </div>
                    <div className="chart-container">
                        <h2>Caller Contact Breakdown</h2>
                        <Doughnut data={contactBreakdownData} options={options} />
                    </div>
                    <div className="chart-container">
                        <h2>Main Reported Issues</h2>
                        <Bar data={reportedIssuesData} options={options} />
                    </div>
                    <div className="chart-container">
                        <h2>Tickets Raised</h2>
                        <Pie data={raisedTicketData} options={options} />
                    </div>
                    <div className="chart-container">
                        <h2>Customer Feedback</h2>
                        <Doughnut data={feedbackData} options={options} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AIInsights;
