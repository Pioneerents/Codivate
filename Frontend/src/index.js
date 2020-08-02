import _ from "lodash";
document.title = "Codivate";
var dropDown = document.getElementById("prefix");
let countryList;

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

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
  console.log("number is ", number);
  var chosen = document.getElementById("prefix");
  var category = document.getElementById("categories");
  var country = chosen.options[chosen.selectedIndex].value;
  var chosenCategory = category.options[category.selectedIndex].value;
  let obj = {
    name: name,
    number: number,
    country: country,
    category: chosenCategory,
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
      signup.innerHTML = `Thank you for signing up!`;

      submit.disabled = true;
    } catch (error) {
      console.log(error);
    }
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);
