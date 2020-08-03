const cors = require("cors")
const app = require("express")();
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Expiring = require('./models/Expiring')
const NewReleases = require('./models/NewReleases')