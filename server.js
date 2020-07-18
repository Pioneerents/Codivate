const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const fileLocation = `${__dirname}/codivate_local.json`;
const userFile = fs.readFileSync(fileLocation, "utf8");
const users = JSON.parse(userFile);

app.use(
  bodyParser.text({
    type: "*/*",
    limit: "500kb",
  })
);

app.post("/submit", (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const number = body.number;
    const doesUserExist = userCheck(number);
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
});

function userCheck(number) {
  try {
    return users.some((element) => {
      return element.number === number;
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports.app = app;
