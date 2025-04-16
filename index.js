gsap.registerPlugin(TextPlugin, ScrollTrigger);

const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = hamburger.querySelectorAll("div");
const hamburgerNav = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
	hamburgerNav.classList.toggle("active");
	hamburgerDiv.forEach(div => div.classList.toggle("active"));
	
});

gsap.from(".images img:first-child", {
	opacity: 0,
	y: -50,
	duration: 1.2,
	ease: "power2.out"
});

gsap.from(".images img:nth-child(2)", {
	opacity: 0,
	scale: 0.9,
	duration: 1.2,
	ease: "power2.out",
	delay: 0.2
});

gsap.from(".name", {
	opacity: 0,
	y: 50,
	duration: 1,
	ease: "power2.out",
	delay: 0.3
});

gsap.from(".intro", {
	opacity: 0,
	y: 20,
	duration: 1,
	ease: "power2.out",
	delay: 0.5
});

gsap.from(".contact", {
	opacity: 0,
	scale: 0.8,
	duration: 0.8,
	delay: 0.8,
	ease: "back.out(1.7)"
});

document.querySelectorAll(".stats").forEach((stat, i) => {
	const target = parseInt(stat.dataset.target);
	const suffixes = ["M+", "M+", "M+"]; 
	
	ScrollTrigger.create({
		trigger: stat,
		start: "top 80%",
		once: true,
		onEnter: () => {
			gsap.fromTo(stat, {
				textContent: 0
			}, {
				textContent: target,
				duration: 2,
				ease: "power1.inOut",
				snap: { textContent: 1 },
				onUpdate: function () {
					stat.textContent = Math.floor(stat.textContent); // just number during animation
				},
				onComplete: () => {
					stat.textContent = `${target}${suffixes[i]}`; // append suffix once
				}
			});
		}
	});
});

gsap.from(".stats-container div", {
	opacity: 0,
	y: 30,
	duration: 1,
	ease: "power2.out",
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".stats-container",
		start: "top 85%",
		once: true
	}
});

gsap.from("nav a", {
	opacity: 0,
	y: -10,
	duration: 0.8,
	stagger: 0.1,
	ease: "power2.out",
	delay: 0.2
});
