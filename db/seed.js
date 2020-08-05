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

console.log(manyReleases);

NewReleases.deleteMany({}).then(() => {
  NewReleases.create(manyReleases)
    .then((results) => {
      console.log(results);
      //   process.exit();
    })
    .catch((err) => {
      console.log(err);
      //   process.exit();
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

console.log(manyExpires);

Expiring.deleteMany({}).then(() => {
  Expiring.create(manyExpires)
    .then((results) => {
      console.log(results);
      //   process.exit();
    })
    .catch((err) => {
      console.log(err);
      //   process.exit();
    });
});
