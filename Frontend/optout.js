const form = document.getElementById("form");
const name = document.getElementById("name").value;
const number = document.getElementById("number");
const dropDown = document.getElementById("prefix");
const numberField = document.getElementById("prepend");
const signup = document.getElementById("signuptext");
let countryList;

const submit = document.getElementById("submit");
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

form.addEventListener("submit", logSubmit);
function logSubmit(event) {
  try {
    event.preventDefault();
    const obj = {
      name: name,
      number: numberField.innerHTML + number.value,
    };
    fetch("/optout", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    submit.innerHTML = "Submitted";
    signup.innerHTML = `You have been removed from the list`;
  } catch (error) {}
}
