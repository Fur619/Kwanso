const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const registeredUser = require("../Model/registeration");
const Joi = require("joi");

router.post("/", async (req, res) => {
  const validation = validateLogin(req.body);
  if (validation.error) {
    res.status(400).send(validation.error.details[0].message);
    console.log("validate issue", validation.error.details[0].message);
    return;
  }
  let user = await registeredUser.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User Already Exists");
  console.log(req.body);

  user = new registeredUser({
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();

  res.send({ User: { id: user._id, email: user.email } });
});

function validateLogin(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(20).required().email(),
    password: Joi.string().min(5).max(30).required(),
  });

  return schema.validate(req);
}

module.exports = router;
