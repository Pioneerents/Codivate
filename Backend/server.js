const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const fileLocation = `${__dirname}/../codivate_local.json`;
const userFile = fs.readFileSync(fileLocation, "utf8");
const users = JSON.parse(userFile);
const { exec } = require("child_process");
const cors = require("cors");
const countries = require("../Frontend/countries.json");
const tweets = require("./SoftwareTips.json");

app.use(
  bodyParser.text({
    type: "*/*",
    limit: "500kb",
  })
);

app.use(cors());

app.use(express.static("Frontend"));

app.post("/submit", async (req, res) => {
  console.log("got it");
  if (req.body && req.body.length > 4) {
    try {
      const body = JSON.parse(req.body);
      body.tipId = 0;
      const number = body.number;
      const name = body.name;
      // const doesUserExist = await userCheck(name, number);
      console.log("user dont exist");
      console.log("status is", doesUserExist);
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

function userCheck(name, number) {
  return new Promise((resolve, reject) => {
    exec(
      `python main.py --name ${name} --number ${number}`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(error);
          reject(err);
        }
        console.log("test", stdout, "bang");
        console.log("after");
        if (stdout) {
          if (stdout.includes("1")) {
            resolve(false);
            return false;
          } else {
            resolve(true);
            return true;
          }
        }
        if (stderr) {
          console.log(stderr);
          reject(err);
        }
      }
    );
  });
}

module.exports.app = app;
