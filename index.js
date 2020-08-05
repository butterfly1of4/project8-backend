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
app.post("/release/", (req, res) => {
  NewReleases.create(req.body).then((release) => {
    res.json(release)
  }) 
})

//PUT Request
app.put("/release/:synopsis", (req, res) => {
  NewReleases.findOneAndUpdate({ synopsis: req.params.synopsis},req.body, {
    new:true,
  }).then((release) => {
    res.json(release)
  })
})

//DELETE Request
app.delete("/release/:title", (req, res) => {
  NewReleases.findOneAndDelete({ title: req.params.title})
  .then((release) => {
    res.json(release)
  })
})


app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
