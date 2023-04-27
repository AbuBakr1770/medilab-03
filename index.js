const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

// Show Menu when Click the Burger
// Hide Menu when Click the Overlay
if (burgerMenu && navbarMenu && bgOverlay) {
  burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    bgOverlay.classList.toggle("is-active");
  });

  bgOverlay.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    bgOverlay.classList.toggle("is-active");
  });
}

// Hide Menu when Click the Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("is-active");
    bgOverlay.classList.remove("is-active");
  });
});
const swiper = new Swiper(".card_slider", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiper2 = new Swiper("#hospital_slider", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2000, // Set delay between slide transitions in milliseconds
    disableOnInteraction: false, // Allow autoplay to continue even if user interacts with the slider
  },
  // Navigation arrows
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  // Define breakpoints
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    // When window width is >= 768px
    530: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // Add more breakpoints as needed
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// JavaScript to toggle the display of additional input fields
document.getElementById("toggleBtn").addEventListener("click", function () {
  var additionalInputs = document.getElementsByClassName("additional-input");
  for (var i = 0; i < additionalInputs.length; i++) {
    if (additionalInputs[i].style.display === "none") {
      additionalInputs[i].style.display = "block";
    } else {
      additionalInputs[i].style.display = "none";
    }
  }
});

// Get the dropdown button and menu
var dropdownBtn = document.getElementById("dropdownBtn");
var dropdownMenu = document.getElementById("dropdownMenu");

// Add click event listener to toggle dropdown menu
dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

// Close dropdown menu when clicking outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".btn.dropdown-toggle")) {
    dropdownMenu.classList.remove("show");
  }
});
