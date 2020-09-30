const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const registeredUser = require("../Model/registeration");

router.post("/", async (req, res) => {
  console.log(req.body);
  let user = await registeredUser.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Email or Password.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Email or Password");
  const token = jwt.sign({ _id: user._id }, "PrivateKey");
  res.send(token);
});

module.exports = router;
