"use strict";

// Elements

const mainHeader = document.querySelector("#main-header");
const toggleMenuBtn = document.querySelector("#toggle-menu-btn");

// Events

toggleMenuBtn.addEventListener("click", function () {
  mainHeader.classList.toggle("open-nav");
});
