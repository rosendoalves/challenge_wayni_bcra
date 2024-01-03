const mongoose = require("mongoose");

const { userDb, passDb } = require("./db.config");

const mongoConnect = async () => {
  const DB_URI = `mongodb+srv://${userDb}:${passDb}@cluster0.zygdc.mongodb.net/session?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = mongoConnect;
