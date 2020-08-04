const cors = require("cors");
const app = require("express")();
const bodyParser = require("body-parser");
const Expiring = require("./models/Expiring");
const NewReleases = require("./models/NewReleases");


app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is a GET route");
});


  
  //GET All Releases request
  app.get("/release", (req, res) => {
    NewReleases.find({}).then((release) => {
      res.json(release)
    })
  });
  
  //GET ALL Expired request
  app.get("/expire", (req, res) => {
   Expiring.find({}).then((expire) => {
      res.json(expire)
    })
  });




app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
