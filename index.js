const cors = require("cors")
const app = require("express")();
app.use(cors())
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Expiring = require('./models/Expiring')
const NewReleases = require('./models/NewReleases')


app.get("/", (req, res) => {
    res.send("This is a GET route");
  });


app.listen(3000, () => {
    console.log('listening')
})