const express = require("express");

const userRoute = require("./routes/user.route.js");
const callerRoute = require("./routes/caller.route.js");
const callRoute = require("./routes/call.route.js");
const sessionRoute = require("./routes/session.route.js");
const ticketRoute = require("./routes/ticket.route.js");
const { applyMiddleware } = require("./middleware");

const createApp = () => {
  const app = express();

  // middleware
  applyMiddleware(app);

  // routes
  app.use("/api/users", userRoute);
  app.use("/api/callers", callerRoute);
  app.use("/api/calls", callRoute);
  app.use("/api/sessions", sessionRoute);
  app.use("/api/tickets", ticketRoute);

  app.get("/", (req, res) => {
    res.send("Hello from the Backend Server!");
  });

  return app;
};

module.exports = { createApp };
