
const observerTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.classList.toggle("animate-top", intersecting);
    if (intersecting) observerTop.unobserve(entry.target);
  });
});

let topElement = document.querySelectorAll("#Animate-top");

topElement.forEach((topElement) => {
  observerTop.observe(topElement);
});
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.classList.toggle("animate-right", intersecting);
    if (intersecting) observerRight.unobserve(entry.target);
  });
});

let rightElement = document.querySelectorAll("#Animate-right");

rightElement.forEach((rightElement) => {
  observerRight.observe(rightElement);
});
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    entry.target.classList.toggle("animate-left", intersecting);
    if (intersecting) observerLeft.unobserve(entry.target);
  });
});

let leftElement = document.querySelectorAll("#Animate-left");

leftElement.forEach((leftElement) => {
  observerLeft.observe(leftElement);
});
function chapter(number) {
	console.log(number);
	switch (number) {
		case 1:
			window.location.href = "chapters/loops/index.html";
			break;
		case 2:
			window.location.href = "chapters/methods/index.html";
			break;
		case 3:
			window.location.href = "chapters/strings/index.html";
			break;
		case 4:
			window.location.href = "chapters/arrays/index.html";
			break;
		case 5:
			window.location.href = "chapters/general/index.html";
			break;
		case 6:
			window.location.href = "chapters/classes/index.html";
			break;
	}
}

let button = document.getElementById("tryButton");
button.addEventListener("click", () => {
  window.location.href = "#topicSec";
});
