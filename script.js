"use strict";

document.querySelector("#my-btn")
.addEventListener("click", clickButton);

function clickButton(event) {
  const button = event.target;
  const userId = button.dataset.userId;

  button.style.backgroundColor = "red";
  
  console.log("user id: " + userId)
  button.dataset.email = userId + "@kea.dk";
}


document.querySelector("#genreform")
.addEventListener("submit", addGenre);

function addGenre(event) {
  event.preventDefault();
  document.querySelector("#added-genres").insertAdjacentHTML("beforeend",
  `<li>${event.target.genre.value}</li>`);
}