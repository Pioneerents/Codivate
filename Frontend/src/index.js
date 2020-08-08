import b from "./img/header.jpg";
import moment from "moment";

document.title = "Codivate";
var dropDown = document.getElementById("prefix");
let countryList;

console.log("hello")
let textSchedule = 19,
currentDate = new Date(),
hours = currentDate.getUTCHours(),
mins = currentDate.getMinutes(),
diffHours = new Date().setHours(19) - hours,
diffMins = mins <= 30 ? 30 - mins : 60 - mins,
minsStr = mins !== "" ? "mins" : ""
var now = moment();


var test_var = moment.utc(`${hours}`, 'HH').diff(moment.utc('20', 'HH'), 'hours');
let duration = 0
if (test_var > 0) {
  duration = (24 - test_var)
} else {
  duration = Math.abs(test_var)
}

let nextText = duration > 0 ? `${duration}hrs` : `the next hour`
console.log(nextText)

fetch("/api/countries", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  if (response.status !== 200) {
    console.log("error fetching countries");
    return;
  }
  response.json().then((data) => {
    countryList = data;
    countryList.forEach((i) => {
      var option = document.createElement("option");
      option.text = i.name;
      dropDown.add(option);
    });
  });
});

var submit = document.getElementById("submit");
var signup = document.getElementById("signuptext");
var numberField = document.getElementById("prepend");
dropDown.onchange = function () {
  let chosenValue = dropDown.options[dropDown.selectedIndex].value;
  let code;
  countryList.forEach((i) => {
    if (i.name === chosenValue) {
      code = i.code;
    }
    if (chosenValue === "") {
      code = "";
    }
    numberField.innerHTML = code;
  });
};

function logSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let number = numberField.innerHTML + document.getElementById("number").value;
  console.log("number is", number, nextText);
  var chosen = document.getElementById("prefix");
  var category = document.getElementById("categories");
  var country = chosen.options[chosen.selectedIndex].value;
  var chosenCategory = category.options[category.selectedIndex].value;
  var levels = document.getElementById("level");
  var chosenLevel = levels.options[levels.selectedIndex].value;
  let obj = {
    name: name,
    number: number,
    country: country,
    category: chosenCategory,
    level: chosenLevel,
  };
  console.log(obj);
  if (number.length < 8 || name.length < 1) {
  } else {
    try {
      fetch("/submit", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
          "Access-Control-Max-Age": 2592000, // 30 days
          /** add other headers as per requirement */
        },
      });
      submit.innerHTML = "Submitted";
      signup.innerHTML = `Thank you for signing up!\nYou'll get your first tip in ${nextText}`;

      submit.disabled = true;
    } catch (error) {
      console.log(error);
    }
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);
