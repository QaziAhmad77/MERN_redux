const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const port = 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = require("./routes/index");
app.use(express.json());
app.use("/api", router);

mongoose
  .connect("mongodb+srv://QaziAhmad:qazi03331602121ahmad@cluster0.82zpao1.mongodb.net/workshop")
  .then(function () {
    console.log("Database connected successfully");
  })
  .catch(function (err) {
    console.log(err);
    console.log("There is some issue while connecting database");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
