"use strict";

const purpleFish = document.querySelector(".purple-fish");

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const vidensButton = document.querySelector(".videns-akvarie");
  const findButton = document.querySelector(".find-fisken");
  const colorButton = document.querySelector(".color-fish");

  vidensButton.addEventListener("click", () => {
    window.location.href = "/html/index-viden.html";
  });

  findButton.addEventListener("click", () => {
    window.location.href = "/html/index-find.html";
  });

  colorButton.addEventListener("click", () => {
    window.location.href = "/html/index-color.html";
  });
});
