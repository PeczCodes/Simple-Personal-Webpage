const contactButton = document.querySelector(".contact");
const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = document.querySelector(".hamburger").querySelectorAll("div");
const hamburgerNav = document.querySelector(".hamburger-menu");

contactButton.addEventListener("click", (e) => console.log("clicked"));

hamburger.addEventListener("click", (e) => {
	hamburgerNav.classList.toggle("active");
	hamburgerDiv.forEach(div => div.classList.toggle("active"));
});

if (hamburgerNav.classList.contains('active')) {
	document.body.style.overflow = 'hidden';
}