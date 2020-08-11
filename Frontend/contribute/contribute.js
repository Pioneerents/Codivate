const form = document.getElementById("form");
const contributionTip = document.getElementById("contributionTip");
const contributionName = document.getElementById("contributionName");
const contributionCategories = document.getElementById(
  "contributionCategories"
);
const submit = document.getElementById("submit");
const contributionText = document.getElementById("contributionText");
function validation(element, number) {
  if (element.value.length < number) {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  } else {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
  }
}

contributionTip.addEventListener("change", () => {
  validation(contributionTip, 10);
});

form.addEventListener("submit", logSubmit);
function logSubmit(event) {
  try {
    event.preventDefault();
    const obj = {
      name: contributionName.value,
      language: contributionCategories.value,
      tip: contributionTip.value,
    };
    fetch("/contribute", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    submit.innerHTML = "Submitted";
    contributionText.innerHTML = "Thank you for contributing";
  } catch (error) {}
}
