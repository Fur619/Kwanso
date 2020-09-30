const router = require("express").Router();
const task = require("../Model/task");
const jwt = require("jsonwebtoken");

router.post("/", checkToken, function (req, res) {
  jwt.verify(req.token, "PrivateKey", async function (error, d) {
    if (error) {
      res.sendStatus(403);
    } else {
      let tasks = new task({
        taskName: req.body.taskName,
      });
      tasks = await tasks.save();
      res.send({ id: tasks._id, name: tasks.taskName });
      return res.status(200);
    }
  });
});

function checkToken(req, res, next) {
  const token = req.headers["token"];
  if (typeof token !== "undefined") {
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
