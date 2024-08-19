require("dotenv").config();

const mongoose = require("mongoose");

const { createApp } = require("./server");

const app = createApp();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3999, () => {
      console.log("Server is running on port 3999");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
