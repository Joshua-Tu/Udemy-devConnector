// get a very simple express server up and running
const express = require("express");
// initialize app variable with express
const app = express();
//if there's no environment variable for port set, it will default to 5000
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
