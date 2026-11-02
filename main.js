//features
var menuBtn = document.getElementById("menu-btn");
var navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  if (navMenu.className == "hud-nav") {
    navMenu.className = "hud-nav open";
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    navMenu.className = "hud-nav";
    menuBtn.setAttribute("aria-expanded", "false");
  }
}
menuBtn.onclick = toggleMenu;

//the one that close the menu
var navLinks = navMenu.getElementsByTagName("a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    navMenu.className = "hud-nav";
    menuBtn.setAttribute("aria-expanded", "false");
  };
}

//day and night mode
var modeBtn = document.getElementById("mode-btn");

function switchMode() {
  if (document.body.className == "night-mode") {
    document.body.className = "";
    modeBtn.innerHTML = "🌙 NIGHT";
  } else {
    document.body.className = "night-mode";
    modeBtn.innerHTML = "☀️ DAY";
  }
}
modeBtn.onclick = switchMode;

//greeting message
var greeting = document.getElementById("greeting");
var hour = new Date().getHours();

if (hour < 12) {
  greeting.innerHTML = "GOOD MORNING, PLAYER!";
} else if (hour < 18) {
  greeting.innerHTML = "GOOD AFTERNOON, PLAYER!";
} else {
  greeting.innerHTML = "GOOD EVENING, PLAYER!";
}

//1-up counter
var mushroom = document.getElementById("mushroom");
var oneupCount = document.getElementById("oneup-count");
var lives = 0;

function addLife() {
  lives = lives + 1;
  oneupCount.innerHTML = lives;
}
mushroom.onclick = addLife;

//project filter button
var filterButtons = document.getElementsByClassName("filter-btn");
var projectCards = document.getElementsByClassName("stage-card");

function filterProjects(type) {
  for (var i = 0; i < projectCards.length; i++) {
    var cardType = projectCards[i].getAttribute("data-type");
    if (type == "all" || cardType == type) {
      projectCards[i].style.display = "flex";
    } else {
      projectCards[i].style.display = "none";
    }
  }
}

for (var j = 0; j < filterButtons.length; j++) {
  filterButtons[j].onclick = function () {
    // remove "active" from all buttons, then add it to the clicked one
    for (var k = 0; k < filterButtons.length; k++) {
      filterButtons[k].className = "filter-btn";
    }
    this.className = "filter-btn active";
    filterProjects(this.getAttribute("data-filter"));
  };
}

//open all skill button
var skillBoxes = document.getElementsByClassName("inventory-slot");
var openAllBtn = document.getElementById("open-all");
var closeAllBtn = document.getElementById("close-all");

function openAllSkills() {
  for (var i = 0; i < skillBoxes.length; i++) {
    skillBoxes[i].open = true;
  }
}

function closeAllSkills() {
  for (var i = 0; i < skillBoxes.length; i++) {
    skillBoxes[i].open = false;
  }
}
openAllBtn.onclick = openAllSkills;
closeAllBtn.onclick = closeAllSkills;

//copy email
var copyBtn = document.getElementById("copy-email");
var copyMsg = document.getElementById("copy-msg");

function copyEmail() {
  var email = "csyakirul359@gmail.com";
  //only work on https
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email);
    copyMsg.innerHTML = "EMAIL COPIED!";
  } else {
    copyMsg.innerHTML = "COPY FAILED. EMAIL: " + email;
  }
}
copyBtn.onclick = copyEmail;

//contact form
var sendBtn = document.getElementById("send-btn");
var formMessage = document.getElementById("form-message");

function checkForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    formMessage.innerHTML = "PLEASE FILL IN ALL THE BOXES.";
    formMessage.style.color = "#f87171";
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    formMessage.innerHTML = "PLEASE ENTER A REAL EMAIL ADDRESS.";
    formMessage.style.color = "#f87171";
  } else {
    formMessage.innerHTML = "THANKS " + name.toUpperCase() + "! MESSAGE READY (DEMO FORM).";
    formMessage.style.color = "#4ade80";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
sendBtn.onclick = checkForm;

//back to back top button
var topBtn = document.getElementById("top-btn");

function checkScroll() {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
window.onscroll = checkScroll;

function goToTop() {
  window.scrollTo(0, 0);
}
topBtn.onclick = goToTop;

// footer
document.getElementById("year").innerHTML = new Date().getFullYear();