const NewReleases = require("../models/NewReleases");
const Expiring = require("../models/Expiring");
const expiredJson = require("../db/expired.json");
const releasesJson = require("../db/newReleases.json");

const manyReleases = releasesJson.ITEMS.map((item) => {
  const release = {};
  release.netflixid = item.netflixid;
  release.title = item.title;
  release.image = item.image;
  release.synopsis = item.synopsis;
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

const manyExpires = expiredJson.ITEMS.map((item) => {
  const expire = {};
  expire.netflixid = item.netflixid;
  expire.title = item.title;
  expire.image = item.image;
  expire.synopsis = item.synopsis;
  expire.unogsdate = item.unogsdate;
  return expire;
});

Expiring.deleteMany({}).then(() => {
  Expiring.create(manyExpires)
    .then((ManyExpires) => {
      console.log(ManyExpires);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
