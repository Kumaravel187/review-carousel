// Importing the reviewCarousell array from the data.js module
import { reviewCarousell } from "./data.js";

// Selecting HTML elements
const imgEl = document.querySelector(".img");
const nameEl = document.querySelector(".name");
const introEl = document.querySelector(".intro");

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const randomBtn = document.querySelector("#randomBtn");

// Initializing the currentIndex variable
let currentIndex = 0;

// Event listener for when the DOM content has loaded
window.addEventListener("DOMContentLoaded", () => {
  // Displaying the initial person's information
  showPerson(currentIndex);
});

// Function to display information for a specific person
const showPerson = (currentItem) => {
  // Getting the current item from the reviewCarousell array
  const item = reviewCarousell[currentItem];

  // Updating HTML elements with current person's information
  imgEl.src = item.image;
  nameEl.innerHTML = `${item.name} <span class="occupation">${item.occupation}</span>`;
  introEl.textContent = item.description;
};

// Function to generate a random number within the array length
const randomNumGenerator = (array = reviewCarousell) => {
  return Math.floor(Math.random() * array.length);
};

// Event listener for the right navigation button
rightBtn.addEventListener("click", () => {
  // Incrementing the currentIndex and handling overflow
  currentIndex++;
  if (currentIndex > reviewCarousell.length - 1) {
    currentIndex = 0;
  }
  // Displaying the updated person's information
  showPerson(currentIndex);
});

// Event listener for the left navigation button
leftBtn.addEventListener("click", () => {
  // Decrementing the currentIndex and handling underflow
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviewCarousell.length - 1;
  }
  // Displaying the updated person's information
  showPerson(currentIndex);
});

// Event listener for the randomize button
randomBtn.addEventListener("click", () => {
  // Generating a random index and displaying the corresponding person's information
  currentIndex = randomNumGenerator();
  showPerson(currentIndex);
});
