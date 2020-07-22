document.title = "Codivate";
var dropDown = document.getElementById("prefix");
let countryList;

const Http = new XMLHttpRequest();
// const url = window.location.host, // we need to use this instead
let port = window.location.port;
// not referencing the port anywhwere using a relative url

fetch("/api/countries").then((response) => {
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
var numberField = document.getElementById("number");
dropDown.onchange = function () {
  let chosenValue = dropDown.options[dropDown.selectedIndex].value;
  let code;
  countryList.map((i) => {
    if (i.name == chosenValue) {
      code = i.code;
    } else {
      code = "";
    }
  });
  numberField.value = code;
};
function logSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  var chosen = document.getElementById("prefix");
  var country = chosen.options[chosen.selectedIndex].value;
  let obj = {
    name: name,
    number: number,
    country: country,
  };
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
      submit.disabled = true;
    } catch (error) {
      console.log(error);
    }
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);
