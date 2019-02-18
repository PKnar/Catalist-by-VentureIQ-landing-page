"use strict";

const handleBurgerMenuClick = (() => {
  const nav_trigger = document.getElementById("cd-primary-nav-trigger");
  const burgerMenu_icon = document.getElementById("cd-menu-icon");
  const nav_header = document.getElementById("cd-header");
  const primary_nav = document.getElementById("cd-primary-nav");

  function handleClick() {
    burgerMenu_icon.classList.toggle("is-clicked");
    nav_header.classList.toggle("menu-is-open");

    primary_nav.classList.toggle("is-visible");
  }

  nav_trigger.addEventListener("click", handleClick);
})();

const changeNavColor = () => {
  const nav = document.getElementById("cd-header");
  console.log(nav);

  if (document.documentElement.scrollTop >= 40) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

window.addEventListener("scroll", changeNavColor);

const loadThePage = () => {
  document.body.className += " fade-out";
  setTimeout(function() {
    let loader = document.getElementById("preloader");
    loader.classList.toggle("fadeOut");
  }, 1000);
};

window.addEventListener("load", loadThePage);

window.sr = ScrollReveal({ reset: true });

sr.reveal(".value-prop", {
  duration: 2000,
  origin: "top",
  distance: "100px"
});

sr.reveal(".advantage-section", {
  duration: 1500
});

sr.reveal(".slideRight", {
  duration: 2000,
  origin: "left",
  distance: "30px"
});

sr.reveal(".slideLeft", {
  duration: 2000,
  origin: "right",
  distance: "30px"
});
sr.reveal(".slideTop", {
  duration: 2000,
  origin: "top",
  distance: "20px"
});
