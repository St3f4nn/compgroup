"use strict";

// Elements

const mainHeader = document.querySelector("#main-header");
const toggleMenuBtn = document.querySelector("#toggle-menu-btn");

const yearEl = document.querySelector("#year");

// Functions

yearEl.textContent = new Date().getFullYear();

// Events

toggleMenuBtn.addEventListener("click", function () {
  mainHeader.classList.toggle("open-nav");
});
