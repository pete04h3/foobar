"use strict";

window.addEventListener("DOMContentLoaded", init);
const spinningNumber = document.querySelector("#root > div > article > h5");

function init() {
  console.log(init);

  spinningNumber.classList.add("spinner");
}
