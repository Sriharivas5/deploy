const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./route");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api", router);

const port = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb+srv://Sriharivas:Nagamani.0@deploy.tidah.mongodb.net/deploy?retryWrites=true&w=majority&appName=deploy"
  )
  .then(() => {
    console.log("database connected successfully");
  });

app.listen(port, () => {
  console.log(`server is succesfully running on localhost ${port}`);
});
