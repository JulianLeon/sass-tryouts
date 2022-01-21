// Mobile Menu Functionality

const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElements.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Slideshow Functionality

const slideshowTrigger = document.querySelectorAll("#slideshow-trigger");
const image = document.getElementById("slideshow-image");

let count = 1;

slideshowTrigger.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();

    if (trigger.classList.contains("arrow-right")) {
      image.src = `/images/Slideshow${count + 1}.jpg`;
      count++;
      if (count > 5) {
        count = 1;
        image.src = `/images/Slideshow${count}.jpg`;
      }
    }

    if (trigger.classList.contains("arrow-left")) {
      image.src = `/images/Slideshow${count - 1}.jpg`;
      count--;
      if (count < 1) {
        count = 5;
        image.src = `/images/Slideshow${count}.jpg`;
      }
    }
  });
});



