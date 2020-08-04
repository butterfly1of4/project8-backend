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

//GET BY TITLE-Releases
app.get("/release/title/:title", (req, res) => {
  NewReleases.find({ title: req.params.title }).then((release) => {
    res.json(release)
})
})

//GET BY TITLE-Expiring
app.get("/expire/title/:title", (req, res) => {
  Expiring.find({ title: req.params.title }).then((expire) => {
    res.json(expire)
})
})

//POST Request
app.post("/release/newMovie", (req, res) => {
  NewReleases.create(req.body).then((release) => {
    res.json(release)
  }) 
})

//PUT Request


//DELETE Request

app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
