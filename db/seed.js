const NewReleases = require('../models/NewReleases')
const Expiring = require('../models/Expiring')

const manyReleases = data.releases.map((item) => {
    const release= {}
    release.netflixid = item.netflixid
    release.title = item.title
    release.image = item.image
    release.synposis = item.synposis
    release.released = item.released
    release.unogsdate = item.unogsdate
    return release
})

NewReleases.deleteMany({}).then(()=>{
    NewReleases.create(manyReleases)
    .then((releases) => {
        console.log(releases)
        process.exit()
    })
    .catch((err) => {
        console.log(err);
        process.exit();
      });
})

const manyExpires = data.expires.map((item)=> { 
    const expire = {}
    release.netflixid = item.netflixid
    release.title = item.title
    release.image = item.image
    release.synposis = item.synposis
    release.unogsdate = item.unogsdate
    return expire
})

Expiring.deleteMany({}).then(() => {
    Expiring.create(manyExpires)
    .then((expires) => {
        console.log(expires)
        process.exit()
    })
    .catch((err) => {
        console.log(err);
        process.exit();
      });
})