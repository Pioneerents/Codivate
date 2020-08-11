const form = document.getElementById("form");
const contributionTip = document.getElementById("contributionTip");
const contributionName = document.getElementById("contributionName");
const contributionCategories = document.getElementById(
  "contributionCategories"
);
const submit = document.getElementById("submit");
submit.disabled = true;
const contributionText = document.getElementById("contributionText");
const invalid = document.getElementById("invalidMessage");
function validation(element, min, max) {
  if (element.value.length < min) {
    submit.disabled = true;
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    let text = element.value.length === 1 ? "Character" : "Characters";
    invalid.innerHTML = `${element.value.length} ${text}. Tip must be at least ${min} characters`;

    element.classList.add("is-valid");
  } else if (element.value.length > max) {
    submit.disabled = true;
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    invalid.innerHTML = `${element.value.length} Characters. Tip must be no more than 260 characters`;
  } else {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    invalid.innerHTML = "";
    submit.disabled = false;
  }
}

contributionTip.addEventListener("input", () => {
  validation(contributionTip, 10, 280);
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
