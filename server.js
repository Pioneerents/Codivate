const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const fileLocation = `${__dirname}/codivate_local.json`;
const userFile = fs.readFileSync(fileLocation, "utf8");
const users = JSON.parse(userFile);
const { exec } = require("child_process");
var a = "";

app.use(
  bodyParser.text({
    type: "*/*",
    limit: "500kb",
  })
);

app.post("/submit", async (req, res) => {
  if (req.body && req.body.length > 4) {
    try {
      const body = JSON.parse(req.body);
      const number = body.number;
      const doesUserExist = await userCheck(req.body);
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

function userCheck(payload) {
  return new Promise((resolve, reject) => {
    exec(`python somefile.py ${payload}`, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        reject(err);
      }
      if (stdout) {
        if (stdout == "False") {
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
