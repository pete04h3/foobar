"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log(init);

  const spinningNumber = document.querySelector("#root > div > article > h5");
  spinningNumber.classList.add("spinner");
}
