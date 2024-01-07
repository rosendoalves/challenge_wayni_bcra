const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const router = require('./src/router')
const mongoConnect = require("./src/config/config.mongo");


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(morgan("dev"));

mongoConnect();

app.use("/", router)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
