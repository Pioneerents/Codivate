const axios = require("axios");
const fs = require("fs");
axios.get("https://type.fit/api/quotes").then((i) => {
  let inspire = i.data.map((i) => {
    if (!i.author) {
      return `${i.text}`;
    } else {
      return `${i.text} - ${i.author}`;
    }
  });
  try {
    fs.writeFileSync(
      "MotivationalQuotes.json",
      JSON.stringify(inspire),
      "utf8"
    );
  } catch (error) {
    console.log(error);
  }
});
