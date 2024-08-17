"use strict";

// Elements

const questionEls = document.querySelectorAll(".question");

for (let i = 0; i < questionEls.length; i++) {
  questionEls[i].addEventListener("click", function () {
    for (let j = 0; j < questionEls.length; j++) {
      if (j !== i) {
        questionEls[j].classList.remove("active");
      }
    }

    questionEls[i].classList.toggle("active");
  });
}
