// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set the Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // Here we are using the foreach loop to loop through the navitems links and add the show class to each of them.
    navItems.forEach(item => item.classList.add("show"));

    // Reset the Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    // Here we are using the foreach loop to loop through the navitems links and add the show class to each of them.
    navItems.forEach(item => item.classList.remove("show"));

    // Reset the Menu State
    showMenu = false;
  }
}

// The about me js code
//Get the main modal container element
var modal = document.getElementById("simpleModal");
//Get the open modal button
var modalBtn = document.getElementById("modalBtn");
//Get the close button
var closeBtn = document.querySelector(".closeBtn");

//Listen for the open click event on the open button
modalBtn.addEventListener("click", openModal);

//Listen for the close click event on the close button
closeBtn.addEventListener("click", closeModal);

//Listen for the outside click event. when you click outside the modal, it will also close
// window.addEventListener("click", outsideClick);

//This is the open Modal function. when the button is click, the modal will open
function openModal() {
  modal.style.display = "block";
}

//This is the close Modal function. when the button is click, the modal will close
function closeModal() {
  modal.style.display = "none";
}

//Function to close modal if click outside
// function outsideClick(e) {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// }
