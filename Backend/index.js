const codivate = require("./server");
const countries = require('../Frontend/countries.json');

codivate.app.listen(5000, function () {
  console.log(`Codivate is listening on port 5000!`);
});

codivate.app.get("/countries", function(req, res) {
  res.send(countries)
})
