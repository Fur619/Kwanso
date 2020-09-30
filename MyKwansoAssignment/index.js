const mongoose = require("mongoose");
const express = require("express");
const app = express();
const login = require("./Routes/login");
const register = require("./Routes/register");
const getUser = require("./Routes/getUser");
const listTasks = require("./Routes/listTasks");
const createTask = require("./Routes/createTask");

const mongodb_uri =
  "mongodb+srv://Fur619:furqanfyp@fypcluster-zq8ux.mongodb.net/kwansodb?retryWrites=true&w=majority";

mongoose
  .connect(mongodb_uri || "mongodb://localhost/FypDatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Cannot connect database", err));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/register", register);
app.use("/login", login);
app.use("/user", getUser);
app.use("/create-task", createTask);
app.use("/list-tasks", listTasks);

app.listen(4000, () => console.log("Listening on port 4000"));
