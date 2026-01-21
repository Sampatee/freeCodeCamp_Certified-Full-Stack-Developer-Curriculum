const form = document.querySelector("#form");

//checks if atleast 1 checkkbox or radio button is checked
const isAtleastOneActive = (type) => {
  const nodeList = form.querySelectorAll(`input[type="${type}"]`);

  return Array.from(nodeList).some((input) => input.checked);
};

//checks the validity of complaint & solutions desc. based on the status of "Other" option
const isDescriptionValid = (name) => {
  const otherInput = form.querySelector(`#other-${name}`);
  const descriptionBox = form.querySelector(`#${name}-description`);

  if (otherInput.checked && descriptionBox.value.length < 20) {
    return false;
  }

  return true;
};

//resturns an object of all formFields validity status
const validateForm = () => {
  const formFields = {
    "full-name": false,
    email: false,
    "order-no": false,
    "product-code": false,
    quantity: false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false,
  };

  for (const field in formFields) {
    formFields[field] = form.querySelector(`#${field}`).validity.valid;
  }

  formFields["complaints-group"] = isAtleastOneActive("checkbox");
  formFields["solutions-group"] = isAtleastOneActive("radio");

  formFields["complaint-description"] = isDescriptionValid("complaint");
  formFields["solution-description"] = isDescriptionValid("solution");

  return formFields;
};

//checks if every formField is valid onSubmission
const isValid = (formFields) =>
  Object.values(formFields).every((value) => value === true);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid(validateForm());
});

//changes the border color of a formField on a change event to show validity
form.addEventListener("change", () => {
  const formFields = validateForm();

  for (const field in formFields) {
    form.querySelector(`#${field}`).style.borderColor = formFields[field]
      ? "green"
      : "red";
  }
});
