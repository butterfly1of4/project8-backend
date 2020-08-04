const cors = require("cors");
const app = require("express")();

const bodyParser = require("body-parser");
const Expiring = require("./models/Expiring");
const NewReleases = require("./models/NewReleases");

<<<<<<< HEAD
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
=======
>>>>>>> d7de2bbd458aac1513739157284756bb886788e2



app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is a GET route");
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
