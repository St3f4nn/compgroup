"use strict";

// ELEMENTS

// Input fields

const allInputFields = document.querySelectorAll(".field");
const requiredFields = document.querySelectorAll("#contact-form [required]");
const selectElements = document.querySelectorAll("select");

// Buttons

const submitBtn = document.querySelector("#contact-form button[type='submit']");

// Note boxes

const emptyFieldsWarn = document.querySelector(
  "#empty-fields-warning-notification"
);
const incorrectEmailWarn = document.querySelector(
  "#email-warning-notification"
);
const formSuccessNote = document.querySelector(
  "#form-submission-success-notification"
);

// FUNCTIONS

function displayNote(noteBox) {
  noteBox.classList.remove("hidden");
  noteBox.classList.add("flex");
}

function hideNote(noteBox) {
  noteBox.classList.remove("flex");
  noteBox.classList.add("hidden");
}

// Add/remove the red border to the current field based on user input

function addRedBorder(inputField) {
  inputField.classList.remove("border-gray-7");

  inputField.classList.remove("hover:border-gray-9");
  inputField.classList.remove("focus:border-gray-9");

  inputField.classList.add("border-red-7");
}

function removeRedBorder(inputField) {
  inputField.classList.add("border-gray-7");

  inputField.classList.add("hover:border-gray-9");
  inputField.classList.add("focus:border-gray-9");

  inputField.classList.remove("border-red-7");
}

// EVENTS

// Form submission functionality

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let allFieldsFilled = true;
  let emailValid = true;

  for (let i = 0; i < requiredFields.length; i++) {
    const currentField = requiredFields[i];

    // Check for value existance

    if (!currentField.value) {
      addRedBorder(currentField);

      displayNote(emptyFieldsWarn);

      hideNote(formSuccessNote);

      if (currentField.type === "email") {
        hideNote(incorrectEmailWarn);
      }

      allFieldsFilled = false;
    } else {
      // Check if the current field is email input field

      if (currentField.type === "email") {
        // Check correct form of the input email

        if (
          !currentField.value.match(
            /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
          )
        ) {
          addRedBorder(currentField);

          displayNote(incorrectEmailWarn);

          hideNote(formSuccessNote);

          emailValid = false;
        } else {
          removeRedBorder(currentField);

          hideNote(incorrectEmailWarn);
        }
      } else {
        removeRedBorder(currentField);

        hideNote(emptyFieldsWarn);

        // Because in this 'else' block current field is filled, it will hide the note giving the information that inputs are empty. Since we can't control the user input behavior, the user can fill in the last input field but omit the others. This will confuse the user because the note is hidden but the borders of the other fields are red, meaning that THOSE fields are empty even if the note is not there. Now, if the last field in an iteration is filled, it will HIDE the note no matter if other fields are empty since this is a LAST ITERATION and will do the specified command (hiding the note).

        // To prevent this, we will check if the field in the current iteration is the last filled field. If it is, we will loop over the OTHER fields that ARE EMPTY and display that note if they are.

        if (currentField === requiredFields[requiredFields.length - 1]) {
          for (let j = 0; j < requiredFields.length - 1; j++) {
            if (!requiredFields[j].value) {
              displayNote(emptyFieldsWarn);
            }
          }
        }
      }
    }
  }

  // Show form submission success note if the 'control' or 'helper' variables are true

  if (allFieldsFilled && emailValid) {
    // Remove values from all fields

    for (let i = 0; i < allInputFields.length; i++) {
      allInputFields[i].value = "";
    }

    // Set the selected option in the select element to the default

    for (let i = 0; i < selectElements.length; i++) {
      selectElements[i].value =
        selectElements[i].querySelector("option[selected]").value;
    }

    displayNote(formSuccessNote);
  }
});
