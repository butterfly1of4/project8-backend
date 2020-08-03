const mongoose = require("mongoose");


mongoose.Promise = Promise
//heroku
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/movies-api";
  }
mongoose.connect(mongoURI, { useNewUrlParser: true });
 // 
module.exports = mongoose;
