const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("The database is up and running");
  }
);

const dataRoute = require("./routes/dataRoute");
app.use("/api/data", dataRoute);

app.listen(process.env.PORT || 8001, () => {
  console.log("The server is running on port 8001");
});
