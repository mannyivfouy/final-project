require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./Config/db");
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:4200',
        allowedHeaders: ["Content-Type", "Authorization"]
    })
)

app.get("/", (req, res) => {
  res.send(`🏃🏻‍♂️ API Is Running...`);
});

//!

app.listen(PORT, () => {
    console.log(`🚀 Server Running On ===> http://localhost:${PORT}`)
})