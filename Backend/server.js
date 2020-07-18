const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const fileLocation = `${__dirname}/codivate_local.json`;
const userFile = fs.readFileSync(fileLocation, "utf8");
const users = JSON.parse(userFile);
const { exec } = require("child_process");
const cors = require("cors");

app.use(
  bodyParser.text({
    type: "*/*",
    limit: "500kb",
  })
);

app.use(cors());

app.post("/submit", async (req, res) => {
  console.log("got it");
  if (req.body && req.body.length > 4) {
    try {
      const body = JSON.parse(req.body);
      body.tipId = 0;
      const number = body.number;
      const name = body.name;
      const doesUserExist = await userCheck(name, number);
      if (!doesUserExist) {
        console.log("user dont exist");
        users.push(body);
        fs.writeFileSync(fileLocation, JSON.stringify(users), "utf8");
        res.sendStatus(200);
      } else {
        console.log("User already exists");
        res.sendStatus(409);
      }
    } catch (error) {
      console.log(error);
    }
  }
});

function userCheck(name, number) {
  return new Promise((resolve, reject) => {
    exec(`python main.py ${name} ${number}`, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        reject(err);
      }
      if (stdout) {
        if (stdout == "1") {
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
    });
  });
}

module.exports.app = app;
