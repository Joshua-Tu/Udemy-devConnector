// get a very simple express server up and running
const express = require("express");
const connectDB = require("./config/db");
// initialize app variable with express
const app = express();
//if there's no environment variable for port set, it will default to 5000
const PORT = process.env.PORT || 5000;
//Connect Database
//connectDB();

app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
