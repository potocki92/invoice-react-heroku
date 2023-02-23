const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const path = require("path");

const uri = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/", routes);
app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
