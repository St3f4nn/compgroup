"use strict";

// ELEMENTS

const mainHeader = document.querySelector("#main-header");
const yearEl = document.querySelector("#year");

// Input fields

const emailInputField = document.querySelector("#email-input-field");

// Buttons

const toggleMenuBtn = document.querySelector("#toggle-menu-btn");
const subBtn = document.querySelector("#sub-btn");

// Note boxes

const warnNote = document.querySelector("#warning-notification");
const successNote = document.querySelector("#success-notification");
const closeNote = document.querySelectorAll("#close-note-btn");

// FUNCTIONS

// Update the current year in the footer every new year

yearEl.textContent = new Date().getFullYear();

// Add red border to the field

function emailInputFieldWarn() {
  emailInputField.classList.add("border-red-7");

  emailInputField.classList.remove("hover:border-gray-9");
  emailInputField.classList.remove("focus:border-gray-9");
}

function showModal(modal) {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal(modal) {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

// EVENTS

// Toggle open/closed navigation

toggleMenuBtn.addEventListener("click", function () {
  mainHeader.classList.toggle("open-nav");
});

// Newsletter subscription functionality

subBtn.addEventListener("click", function () {
  // Check for value existance

  if (!emailInputField.value) {
    emailInputFieldWarn();

    closeModal(warnNote);
    closeModal(successNote);
  } else if (
    // Check correct form of the input email

    !emailInputField.value.match(
      /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    )
  ) {
    emailInputFieldWarn();

    showModal(warnNote);
    closeModal(successNote);
  } else {
    // Show newsletter subscription success note

    showModal(successNote);
    closeModal(warnNote);

    emailInputField.classList.remove("border-red-7");

    emailInputField.classList.add("hover:border-gray-9");
    emailInputField.classList.add("focus:border-gray-9");

    emailInputField.value = "";
  }
});

// Close modal functionality (because there are multiple closing buttons we are adding event listener on each with loop)

for (let i = 0; i < closeNote.length; i++) {
  closeNote[i].addEventListener("click", function () {
    closeModal(closeNote[i].parentElement);
  });
}
