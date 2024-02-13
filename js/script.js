"use strict";

const closeBtnEl = document.querySelector(".close-btn");
const menuIconEl = document.querySelector(".menu-icon");
const sidebarEl = document.querySelector(".sidebar");
const overlayEl = document.querySelector(".overlay");

// 👌👌👌👌 Functions
const showSidebar = function () {
  // const currentDisplay = window.getComputedStyle(e).left;
  sidebarEl.style.left = "0";
  overlayEl.classList.remove("hidden");
};

const closeSidebar = function () {
  sidebarEl.style = "left: -500px";
  overlayEl.classList.add("hidden");
};

// 👌👌👌👌 Closing Sidebar
closeBtnEl.addEventListener("click", closeSidebar);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !sidebarEl.classList.contains("hidden")) {
    closeSidebar();
  }
});

overlayEl.addEventListener("click", closeSidebar);

// 👌👌👌👌 Showing Sidebar
menuIconEl.addEventListener("click", showSidebar);

// 👌👌👌 Changing the nav links when scrolled

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

  const changeLinkState = function () {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    navLinks[index].classList.add("active");

    sidebarLinks.forEach(function (link) {
      link.classList.remove("active");
      closeSidebar();
    });

    sidebarLinks[index].classList.add("active");
  };

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);
});

// 👌👌👌 Changing the navbar  color when scrolled

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Initial check in case the page is loaded with some scroll position
  handleScroll();

  // Listen for the scroll event
  window.addEventListener("scroll", handleScroll);
});
