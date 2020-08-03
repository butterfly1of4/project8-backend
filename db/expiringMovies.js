const fetch = require("node-fetch");
const fs = require("fs");

const url =
  "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Aexp%3AUS&t=ns&st=adv&p=1";

fetch(url, {
  method: "GET",
  headers: {
    "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
    "x-rapidapi-key": "7b69d66b85msh7236a1c64065cd8p1a3691jsn6633347a700d",
  },
})
  .then((res) => res.json())
  .then((res) => {
    let expired = JSON.stringify(res);
    console.log(movies);
    fs.writeFile("./db/expired.json", expired, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
