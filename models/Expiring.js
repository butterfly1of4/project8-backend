const mongoose = require("../db/connection");

const Schema = mongoose.Schema

const Expiring = new Schema({
    netflixid: String,
    title: String,
    image: String,
    synopsis: String,
    unogsdate: String
})
module.exports = mongoose.model("Expiring",Expiring)