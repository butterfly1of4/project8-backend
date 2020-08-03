const mongoose = require("../db/connection");

const Schema = mongoose.Schema

const NewReleases = new Schema({
    netflixid: String,
    title: String,
    image: String,
    synopsis: String,
    released: String,
    unogsdate: String
})
module.exports = mongoose.model("NewReleases", NewReleases)