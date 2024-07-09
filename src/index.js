import "./styles.css";
import loadMainPage from "./mainpage";
import loadMenuPage from "./menupage";
import loadContactPage from "./contactpage";

document.addEventListener("DOMContentLoaded", () => {
  loadMainPage();
});

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.addEventListener("click", loadMainPage);
menuButton.addEventListener("click", loadMenuPage);
contactButton.addEventListener("click", loadContactPage);
