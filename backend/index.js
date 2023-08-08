const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const { sequelize } = require("./configs/db");
const { postRouter } = require("./routes/post.route");
const { commentRouter } = require("./routes/comment.route");
const { userRouter } = require("./routes/user.route");
const { authentication } = require("./middleware/authentication");
require("dotenv").config();
const { logger } = require("./middleware/logger");
app.use(logger);
app.get("/", (req, res) => {
  res.send("APIs are working fine");
});
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", authentication, commentRouter);

app.listen(9800, async () => {
  try {
    await sequelize.sync();
    console.log("Connected to database");
  } catch (error) {
    console.log("trouble while connecting");
  }
  console.log("Server is running on port 9800");
});
