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
<<<<<<< HEAD

console.log(manyReleases);

=======
console.log(manyReleases);
>>>>>>> 7c496a6fa7beeac7100f26a076e456487f4da663
NewReleases.deleteMany({}).then(() => {
  NewReleases.create(manyReleases)
    .then((results) => {
      console.log(results);
<<<<<<< HEAD
      //   process.exit();
    })
    .catch((err) => {
      console.log(err);
      //   process.exit();
=======
    })
    .catch((err) => {
      console.log(err);
>>>>>>> 7c496a6fa7beeac7100f26a076e456487f4da663
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
<<<<<<< HEAD

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
=======
console.log(manyExpires);
Expiring.deleteMany({}).then(() => {
  Expiring.create(manyExpires).then(
    ((manyExpires) => {
      console.log(manyExpires);
    }).catch((err) => {
      console.log(err);
    })
  );
>>>>>>> 7c496a6fa7beeac7100f26a076e456487f4da663
});
