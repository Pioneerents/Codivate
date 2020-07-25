const codivate = require("./server");
const logger = require("./logger");

codivate.app.listen(3000, function () {
  console.log(`Codivate is listening on port 3000!`);
  logger.info("Codivate running on port 3000");
});
