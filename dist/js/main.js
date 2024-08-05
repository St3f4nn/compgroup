"use strict";

// Elements

const mainHeader = document.querySelector("#main-header");
const toggleMenuBtn = document.querySelector("#toggle-menu-btn");

const emailInputField = document.querySelector("#email-input-field");
const subBtn = document.querySelector("#sub-btn");

const warnNote = document.querySelector("#warning-notification");
const successNote = document.querySelector("#success-notification");
const closeNote = document.querySelectorAll("#close-note-btn");

const yearEl = document.querySelector("#year");

// Functions

yearEl.textContent = new Date().getFullYear();

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

// Events

toggleMenuBtn.addEventListener("click", function () {
  mainHeader.classList.toggle("open-nav");
});

subBtn.addEventListener("click", function () {
  if (!emailInputField.value) {
    emailInputFieldWarn();
  } else if (
    !emailInputField.value.match(
      /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    )
  ) {
    emailInputFieldWarn();

    showModal(warnNote);
    closeModal(successNote);
  } else {
    showModal(successNote);
    closeModal(warnNote);

    emailInputField.classList.remove("border-red-7");

    emailInputField.classList.add("hover:border-gray-9");
    emailInputField.classList.add("focus:border-gray-9");
  }
});

for (let i = 0; i < closeNote.length; i++) {
  closeNote[i].addEventListener("click", function () {
    closeModal(closeNote[i].parentElement);
  });
}
