const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    // Untuk GPS
    mongoose,
    url: dbConfig.url,
    gps: require("./gps.model.js")(mongoose)
}