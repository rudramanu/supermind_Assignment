const { Users } = require("../models/user.model");
const express = require("express");
const userRouter = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  let data = await Users.findAll();
  res.send(data);
});

userRouter.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 3, async (err, encrypted) => {
      if (err) {
        console.log("Something went wrong");
      } else {
        await Users.create({ name, email, password: encrypted });
        res.send("User Created");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });
    const hashed_password = user?.password;

    bcrypt.compare(password, hashed_password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userId: user.id }, "coder");
        console.log("userId", user.id);
        console.log("token", token);
        res.send({
          message: "Logged in successfully",
          token: token,
          name: user.name,
          email,
        });
      } else {
        res.send("Wrong credentials");
      }
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = {
  userRouter,
};
