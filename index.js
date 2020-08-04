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

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
