const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// // Typing intro text on the video
// document.addEventListener("DOMContentLoaded", () => {
//   const typingText = document.getElementById("typing");
//   const intro = "Federated Learning: Train smarter, collaborate privately.";

//   let index = 0;

//   function typeChar() {
//     if (index < intro.length) {
//       typingText.textContent += intro.charAt(index);
//       index++;
//       setTimeout(typeChar, 50);
//     }
//   }

//   typeChar();
// });


// Toggle navbar style on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// Scroll animation logic
const revealElements = document.querySelectorAll(".fade-up, .slide-left, .slide-right");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));
