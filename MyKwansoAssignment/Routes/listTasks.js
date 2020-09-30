const router = require("express").Router();
const task = require("../Model/task");
const jwt = require("jsonwebtoken");

router.get("/", checkToken, function (req, res) {
  jwt.verify(req.token, "PrivateKey", async function (error, d) {
    if (error) {
      res.sendStatus(403);
    } else {
      task
        .find({})
        .then((data) => {
          res.send({ tasks: data });
          return res.status(200);
        })
        .catch((error) => console.log(error));
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
