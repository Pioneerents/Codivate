import moment from "moment";
document.title = "Codivate";
var dropDown = document.getElementById("prefix");
let countryList;
var numberField = document.getElementById("prepend");
var phoneNumber = document.getElementById("number");
var submit = document.getElementById("submit");
submit.disabled = true;

phoneNumber.addEventListener("change", validation);

async function validation(code = null) {
  var numberAndCC =
    code == null
      ? code + phoneNumber.value
      : numberField.innerHTML + phoneNumber.value;

  if (phoneNumber.value.length == 0) {
    phoneNumber.classList.remove("is-invalid");
    phoneNumber.classList.remove("is-valid");
    return;
  }

  try {
    if (await validateNumber(numberAndCC)) {
      submit.disabled = false;
      phoneNumber.classList.remove("is-invalid");
      phoneNumber.classList.add("is-valid");
    } else {
      submit.disabled = true;
      phoneNumber.classList.remove("is-valid");
      phoneNumber.classList.add("is-invalid");
    }
  } catch (error) {}
}

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

fetch("/api/countries", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  if (response.status !== 200) {
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
  validation(code);
};

function logSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let number = numberField.innerHTML + phoneNumber.value;
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

  if (name.length < 1) {
  } else {
    try {
      fetch("/submit", {
        method: "POST",
        body: JSON.stringify(obj),
      });
      submit.innerHTML = "Submitted";
      signup.innerHTML = `Thank you for signing up!\nYou'll get your first tip in ${nextText}`;

      submit.disabled = true;
    } catch (error) {}
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);

/* Contribution */
// alert("here");
// const contributionForm = document.getElementById("contributionForm");

// contributionForm.addEventListener("submit", logContributionSubmit);

// function logContributionSubmit(event) {
//   alert("gg");
//   event.preventDefault();
//   const contributionName = document.getElementById("contributionName").value;
//   const contributionCategories = document.getElementById(
//     "contributionCategories"
//   ).value;
//   const contributionLevel = document.getElementById("contributionLevel").value;
//   const contributionTip = document.getElementById("contributionTip").value;

//   console.log(contributionName);
//   console.log(contributionCategories);
//   console.log(contributionLevel);
//   console.log(contributionTip);
// }
