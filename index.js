const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://eckzen:Ren0214@mern-w8bjs.mongodb.net/MERN?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Route handling
app.get("/", (req, res) => {
  res.send("Renielle");
});

app.listen(5000);
