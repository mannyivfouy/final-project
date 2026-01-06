require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./Config/db");
const PORT = process.env.PORT || 5000;

const students = require("./routes/student.routes");
const users = require("./routes/user.routes");
const login = require("./routes/login.routes");
const allowedOrigins = ["http://localhost:4200", "http://localhost:4900"];

connectDB();
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send(`🏃🏻‍♂️ API Is Running...`);
});

//!
app.use("/api/students", students);
app.use("/api/users", users);
app.use("/api/login", login);
//!

app.listen(PORT, () => {
  console.log(`🚀 Server Running At ===> http://localhost:${PORT}`);
});
