const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const port = process.env.port || 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = require("./routes/index");
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URL)
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
