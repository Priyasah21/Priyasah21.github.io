// script.js

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const burger = document.createElement("div");
  burger.classList.add("burger");

  // Add hamburger icon
  burger.innerHTML = "☰";
  burger.style.fontSize = "24px";
  burger.style.cursor = "pointer";
  document.querySelector(".nav-container").appendChild(burger);

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
