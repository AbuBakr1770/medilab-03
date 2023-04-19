// Nav Bar Logic

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



// Search toggle

document.getElementById("toggleBtn").addEventListener("click", function() {
    var myDiv = document.getElementById("myDiv");
    myDiv.classList.toggle("show"); /* Toggle the "show" class to toggle display between none and flex */
  });