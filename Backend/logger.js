const log4js = require("log4js");
log4js.configure({
  appenders: {
    Log: {
      type: "file",
      filename: `${__dirname}/../Logs/nodeServer.log`,
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ["Log"], level: "debug" },
  },
});
const logger = log4js.getLogger("Log");

module.exports = logger;
