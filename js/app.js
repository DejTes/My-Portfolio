const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

// close sidebar when close button is clicked
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// close sidebar when a sidebar link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
});

// set year
date.innerHTML = new Date().getFullYear();

//toggles the navigation menu in contact me page
document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("nav-btn");
  const navLinks = document.querySelector(".nav-links");

  navBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show-links");
  });



 // Hero section animation
 const heroInfo = document.querySelector('.hero-info');
 const heroImg = document.querySelector('.hero-img');

 heroInfo.style.opacity = '1';
 heroInfo.style.transform = 'translateX(0)';

 heroImg.style.opacity = '1';
 heroImg.style.transform = 'translateX(0)';



});







// contact me form function
function sendEmail() {
  Email.send({
    SecureToken: "65955C083D8FBF4D085D947943B6C0796790",
    To: "dejenaref@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone Num: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent successfully!"));
}

//ScrollReveal
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      const targetElement = document.querySelector(target);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Initialize ScrollReveal
  const sr = ScrollReveal({
    distance: "200px",
    duration: 1000,
    easing: "ease-in-out",
    reset: true,
  });

  // Reveal animation for projects section
  sr.reveal("#home", { origin: "top" });
  sr.reveal("#about", { origin: "bottom" });
  sr.reveal("#projects", { origin: "bottom" });

  // Reveal animation for about me section
  sr.reveal("#skills", { origin: "top" });
  sr.reveal("#freelance", { origin: "bottom" });

  sr.reveal("#contact", { origin: "bottom" });
  sr.reveal("#footer", { origin: "top" });
});

// skills section

function fadeInSkills() {
  const skillsBoxes = document.querySelectorAll(".skills-box");

  let delay = 0;
  skillsBoxes.forEach((box) => {
    setTimeout(() => {
      box.style.opacity = 1;
      box.style.transform = "translateX(0)";
    }, delay);
    delay += 150;
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills-section");
  const skillsSectionTop = skillsSection.offsetTop;
  const windowHeight = window.innerHeight;

  if (window.pageYOffset > skillsSectionTop - windowHeight + 200) {
    fadeInSkills();
  }
});
