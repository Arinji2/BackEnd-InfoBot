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
