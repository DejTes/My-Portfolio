
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
sidebarLinks.forEach(link => {
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
});

// contact me form function
function sendEmail(){
  Email.send({
      SecureToken: "65955C083D8FBF4D085D947943B6C0796790",
      To : 'dejenaref@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact",
      Body : "Name: " + document.getElementById('name').value
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Phone Num: " + document.getElementById('phone').value
            + "<br> Message: " + document.getElementById('message').value
  }).then(
message => alert('Message Sent successfully!')
);
}

//ScrollReveal
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = e.target.getAttribute('href');
          const targetElement = document.querySelector(target);
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });

  
  // Initialize ScrollReveal
  const sr = ScrollReveal({
      distance: '50px',
      duration: 2000,
      easing: 'ease-in-out',
      reset: true,
  });

  // Reveal animation for projects section
  sr.reveal('#projects', { origin: 'left' });
  sr.reveal('#home', { origin: 'top' });

  // Reveal animation for about me section
  sr.reveal('#about', { origin: 'right' });

  sr.reveal('#contact', { origin: 'bottom' });
  sr.reveal('#footer', { origin: 'right' });
 
 
});




