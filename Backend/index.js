const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PostRouter = require("./Routes/PostRouter");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Inceptum:Inceptum@blogdb.h7umg0f.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed: ", err);
  });

app.use("/api/post", PostRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
