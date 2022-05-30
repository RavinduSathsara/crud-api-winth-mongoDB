const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const postRoute = require("./routes/posts");

const app = express();

// middlewares
app.use(bodyParser.json());
app.use("/api/posts", postRoute);
app.use(cors());

//connect to db
mongoose.connect(process.env.BD_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Database has connected !");
});

app.listen(3500, () => {
  console.log("Server running on  http://localhost:3500");
});
