const fetch = require("node-fetch");
const fs = require("fs");

const url =
  "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv";

fetch(url, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
    "x-rapidapi-key": "7b69d66b85msh7236a1c64065cd8p1a3691jsn6633347a700d",
  },
})
  .then((res) => res.json())
  .then((res) => {
    let newReleases = JSON.stringify(res);
    console.log(newReleases);
    fs.writeFile("./db/newReleases.json", newReleases, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    }).catch((err) => {
      console.log(err);
    });
  });
