"use-strict";

const btnScrollTo = document.querySelector(".scroll-btn")
const graphicsSec = document.querySelector(".graphics-1")

const btnMenu = document.querySelector(".btn-menu")
const navItems = document.querySelector(".nav-items")

btnScrollTo.addEventListener("click", function (e) {
    e.preventDefault();
    graphicsSec.scrollIntoView({ behavior: "smooth" })
});

btnMenu.addEventListener("click", function () {
    console.log("clicked");
    btnScrollTo.classList.toggle("scroll-btn__active");
    navItems.classList.toggle("nav-items__active");
})