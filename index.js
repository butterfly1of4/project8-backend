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
  
//Heroku Access
  app.set("port", process.env.PORT || 8080);

  app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });

//Local Access
app.listen(3000, () => {
    console.log('listening')
})