const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const fs = require("fs");
const fileLocation = `${__dirname}/../codivate_local.json`;
const userFile = fs.readFileSync(fileLocation, "utf8");
const users = JSON.parse(userFile);
const countries = require("../Frontend/countries.json");
const tweets = require("./SoftwareTips.json");
app.use(helmet());
app.use(
  bodyParser.text({
    type: "*/*",
    limit: "500kb",
  })
);

app.use(express.static("Frontend"));

app.post("/submit", async (req, res) => {
  console.log("got it");
  if (req.body && req.body.length > 4) {
    try {
      const body = JSON.parse(req.body);
      body.tipId = 0;
      users.push(body);
      fs.writeFileSync(fileLocation, JSON.stringify(users), "utf8");
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
});

app.get("/api/countries", function (req, res) {
  res.send(countries);
});

app.get("/api/tweets", function (req, res) {
  res.send(tweets);
});

module.exports.app = app;
