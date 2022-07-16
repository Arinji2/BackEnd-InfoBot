const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const intersecting = entry.isIntersecting;
		entry.target.classList.toggle("animate", intersecting);
		if (intersecting) observer.unobserve(entry.target);
	});
});

let pictures = document.querySelectorAll("#animate");

pictures.forEach((pictures) => {
	observer.observe(pictures);
});

const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const intersecting = entry.isIntersecting;
		entry.target.classList.toggle("animate-info", intersecting);
		if (intersecting) observer2.unobserve(entry.target);
	});
});

let text = document.querySelectorAll("#animate-info");

text.forEach((text) => {
	observer2.observe(text);
});

function chapter(number) {
	switch (number) {
		case 1:
			window.location.href = "chapters/loops/index.html";
		case 2:
			window.location.href = "chapters/methods/index.html";
		case 3:
			window.location.href = "chapters/strings/index.html";
		case 4:
			window.location.href = "chapters/arrays/index.html";
		case 5:
			window.location.href = "chapters/constructors/index.html";
		case 6:
			window.location.href = "chapters/classes/index.html";
	}
}

let what = document.getElementById("what-are-we");
let chapters = document.getElementById("chapters-link");
let team = document.getElementById("team-link");
what.addEventListener("click", (ev) => {
	document.documentElement.scrollTo(0, 1250);
});
chapters.addEventListener("click", (ev) => {
	document.documentElement.scrollTo(0, 2000);
});
team.addEventListener("click", (ev) => {
	document.documentElement.scrollTo(0, 2700);
});
