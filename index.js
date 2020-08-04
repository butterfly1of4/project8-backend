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
  
  //GET All request
  app.get("/release", (req, res) => {
    NewReleases.find({}).then((release) => {
      res.json(release)
    })
  });
  
  app.get("/expire", (req, res) => {
    NewReleases.find({}).then((expire) => {
      res.json(expire)
    })
  });


//Heroku Access
  app.set("port", process.env.PORT || 8080);

  app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });

//Local Access
// app.listen(3000, () => {
//     console.log('listening')
// })


