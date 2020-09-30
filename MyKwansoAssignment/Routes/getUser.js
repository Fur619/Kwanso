const router = require("express").Router();
const registeredUser = require("../Model/registeration");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
const JwtDecode = require("jwt-decode");

router.get("/", checkToken, function (req, res) {
  jwt.verify(req.token, "PrivateKey", async function (error, d) {
    if (error) {
      res.sendStatus(403);
    } else {
      const user = JwtDecode(req.token);
      registeredUser
        .findById(user._id)
        .then((data) => res.send({ id: data._id, email: data.email }))
        .catch((err) => console.log(err));
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
