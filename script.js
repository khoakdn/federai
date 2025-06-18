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






// Case study filtering and pagination

    document.addEventListener('DOMContentLoaded', () => {
      const cards = Array.from(document.querySelectorAll('.case-card'));
      const dotsContainer = document.querySelector('.dots');
      const prevBtn = document.querySelectorAll('.arrow-btn')[0];
      const nextBtn = document.querySelectorAll('.arrow-btn')[1];
      const yearFilter = document.getElementById('year');
      const monthFilter = document.getElementById('month');
      const searchInput = document.getElementById('search');

      let currentPage = 0;
      const perPage = 6;

      function filterAndPaginate() {
        const year = yearFilter.value.toLowerCase();
        const month = monthFilter.value.toLowerCase();
        const search = searchInput.value.toLowerCase();

        const filtered = cards.filter(card => {
          const date = card.querySelector('.pub-date').textContent.toLowerCase();
          const title = card.querySelector('h3').textContent.toLowerCase();
          return (
            (year === 'all' || date.includes(year)) &&
            (month === 'all' || date.includes(month)) &&
            (search === '' || title.includes(search))
          );
        });

        cards.forEach(card => card.style.display = 'none');
        filtered.slice(currentPage * perPage, (currentPage + 1) * perPage).forEach(card => card.style.display = 'flex');

        updateDots(filtered.length);
      }

      function updateDots(total) {
        dotsContainer.innerHTML = '';
        const totalPages = Math.ceil(total / perPage);
        for (let i = 0; i < totalPages; i++) {
          const dot = document.createElement('span');
          dot.className = 'dot';
          if (i === currentPage) dot.classList.add('active');
          dot.addEventListener('click', () => {
            currentPage = i;
            filterAndPaginate();
          });
          dotsContainer.appendChild(dot);
        }
      }

      prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
          currentPage--;
          filterAndPaginate();
        }
      });

      nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(cards.length / perPage);
        if (currentPage < totalPages - 1) {
          currentPage++;
          filterAndPaginate();
        }
      });

      yearFilter.addEventListener('change', () => { currentPage = 0; filterAndPaginate(); });
      monthFilter.addEventListener('change', () => { currentPage = 0; filterAndPaginate(); });
      searchInput.addEventListener('input', () => { currentPage = 0; filterAndPaginate(); });

      filterAndPaginate();
    });




    // hamburger menu toggle
    document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navbar = document.querySelector('.navbar');

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
});
