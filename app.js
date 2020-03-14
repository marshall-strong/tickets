const express = require("express");
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users")
const tickets = require("./routes/api/tickets")

const app = express();
const port = process.env.PORT || 5000;



app.get("/", (req, res) => res.send("You are connected"));
app.use("/api/users", users)
app.use("/api/tickets", tickets)

app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
