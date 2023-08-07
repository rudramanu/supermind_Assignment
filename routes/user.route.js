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
        res.send({ message: "User Created" });
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

    if (!user) {
      return res.send({ message: "User not found" });
    }

    const hashed_password = user.password;
    console.log("hashed_password", hashed_password);

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
        console.log("errrrr", err);
        res.send({ message: "Wrong credentials" });
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
