const NewReleases = require("../models/NewReleases");
const Expiring = require("../models/Expiring");
const expiredJson = require("./expired.json");
const releasesJson = require("../db/newReleases.json");

const manyReleases = releasesJson.items.map((item) => {
  const release = {};
  release.netflixid = item.netflixid;
  release.title = item.title;
  release.image = item.image;
  release.synposis = item.synposis;
  release.released = item.released;
  release.unogsdate = item.unogsdate;
  return release;
});

NewReleases.deleteMany({}).then(() => {
  NewReleases.create(manyReleases)
    .then((manyReleases) => {
      console.log(manyReleases);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});

const manyExpires = data[0].expiredJson.items.map((item) => {
  const expire = {};
  release.netflixid = item.netflixid;
  release.title = item.title;
  release.image = item.image;
  release.synposis = item.synposis;
  release.unogsdate = item.unogsdate;
  return expire;
});

Expired.deleteMany({}).then(() => {
  Expired.create(manyExpires)
    .then((ManyExpires) => {
      console.log(ManyExpires);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
