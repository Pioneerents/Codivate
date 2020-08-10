require("dotenv").config();
const logger = require("./logger");
const twilio = require("twilio");
class twilioAPI {
  constructor() {
    this.accountSid = process.env.accountSid;
    this.authToken = process.env.authToken;
    this.client = twilio(this.accountSid, this.authToken);
  }
  async validateNumber(number) {
    var { client } = this;
    try {
      var result = await client.lookups
        .phoneNumbers(number)
        .fetch({ type: ["carrier"] });
      if (result.carrier.error_code != null) {
        throw new Error("Invalid number");
      }
      console.log(result);
      console.log("true from twil");
      return true;
    } catch (error) {
      console.log("false");
      logger.error(`${number} - Number not validated`);
    }
  }
}

module.exports = twilioAPI;
