import b from "./img/header.jpg";
import moment from "moment";
spinner.style.display = "none";
document.title = "Codivate";
var dropDown = document.getElementById("prefix");
let countryList;
var numberField = document.getElementById("prepend");
var phoneNumber = document.getElementById("number");
var submit = document.getElementById("submit");
submit.disabled = true;
// var spinner = document.getElementById("spinner");

phoneNumber.addEventListener("change", async () => {
  var numberAndCC = numberField.innerHTML + phoneNumber.value;
  // spinner.style.display = "block";
  try {
    if (await validateNumber(numberAndCC)) {
      submit.disabled = false;
      console.log("valid");
      phoneNumber.classList.remove("is-invalid");
      phoneNumber.classList.add("is-valid");
      // spinner.style.display = "none";
    } else {
      console.log("submit", submit);
      submit.disabled = true;
      console.log("invalid");
      phoneNumber.classList.remove("is-valid");
      phoneNumber.classList.add("is-invalid");
      // spinner.style.display = "none";
    }
  } catch (error) {
    console.log(error);
  }
});

async function validateNumber(number) {
  let result = await fetch(`/api/verifyUser?number=${number}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (result.status === 200) {
    return true;
  }
  console.log("status is ", result.status);
  return false;
}

let currentDate = new Date(),
  hours = currentDate.getUTCHours();

// We send texts at 16:00 UTC
var time_diff = moment
  .utc(`${hours}`, "HH")
  .diff(moment.utc("16", "HH"), "hours");
let duration = 0;
if (time_diff > 0) {
  duration = 24 - time_diff;
} else {
  duration = Math.abs(time_diff);
}

let nextText = duration > 0 ? `${duration}hrs` : `the next hour`;
console.log(nextText);

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

var signup = document.getElementById("signuptext");

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
  let number = numberField.innerHTML + phoneNumber.value;
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
