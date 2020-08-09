const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const helmet = require("helmet");
const fs = require("fs");
const fileLocation = `${__dirname}/../resources/codivate_local.json`;
const countries = require("../Frontend/countries.json");
const tweets = require("./SoftwareTips.json");
const logger = require("./logger");
const twilio = require('twilio');

var client = new twilio(process.env.ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(helmet());
app.use(
  bodyParser.text({
    type: "*/*",
    limit: "500kb",
  })
);

app.use(express.static("Frontend"));

app.post("/submit", async (req, res) => {
  logger.info("Received a submit request");
  const users = JSON.parse(fs.readFileSync(fileLocation, "utf-8"));
  if (req.body && req.body.length > 4) {
    try {
      const body = JSON.parse(req.body);
      let valid = false
      // Validate number
      let valid_number = client.lookups.phoneNumbers(body.number)
              .fetch({type: ['carrier']})
              .then(phone_number => valid = true);
      if (!valid_number) {
        logging.error(`${number} is not valid`)
        //TODO: Mo, Send an error message back to client side here
      }
      body.tipId = 0;
      users.push(body);
      fs.writeFileSync(fileLocation, JSON.stringify(users), "utf8");
      res.sendStatus(200);
    } catch (error) {
      logger.error(error);
      console.log(error);
    }
  }
});

app.get("/api/countries", function (req, res) {
  try {
    res.send(countries);
  } catch (error) {
    logger.error(error);
  }
});

app.get("/api/tweets", function (req, res) {
  try {
    res.send(tweets);
  } catch (error) {
    logger.error(error);
  }
});

module.exports.app = app;
