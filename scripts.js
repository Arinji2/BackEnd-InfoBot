let about = document.getElementById("about-dropdown");
let aboutContent = document.getElementById("about-content");
about.addEventListener("click", function () {
  if (aboutContent.style.display == "block")
    aboutContent.style.display = "none";
  else aboutContent.style.display = "block";
});

let contact = document.getElementById("contact-dropdown");

contact.addEventListener("click", function () {
  let contactContent = document.getElementById("contact-content");
  if (contactContent.style.display == "block")
    contactContent.style.display = "none";
  else contactContent.style.display = "block";
});

window.onscroll = function () {
  scrollFunc();
  scrollFuncM();
};

var navbar = document.getElementById("navbar");
var navbarM = document.getElementById("navbar-mobile");
var sticky = navbar.offsetTop;
var stickyM = navbarM.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function scrollFuncM() {
  if (window.pageYOffset >= stickyM) {
    navbarM.classList.add("sticky");
  } else {
    navbarM.classList.remove("sticky");
  }
}

class ObserverCreator {
  constructor(className, objectName, idName) {
    this.className = className;
    this.objectName = objectName;
    this.idName = idName;
    this.objCreator(className, objectName, idName);
  }
  objCreator(className, objectName, idName) {
    objectName = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        entry.target.classList.toggle(className, intersecting);
        if (intersecting) objectName.unobserve(entry.target);
      });
    });

    let element = document.querySelectorAll(idName);

    element.forEach((element) => {
      objectName.observe(element);
    });
  }
}

var headPic = new ObserverCreator(
  "animate-head-pic",
  "observerHeadPic",
  "#animate-head-pic"
);

var top = new ObserverCreator("animate-top", "animateTop", "#animate-top");
var left = new ObserverCreator("animate-left", "animateLeft", "#animate-left");
var right = new ObserverCreator(
  "animate-right",
  "animateRight",
  "#animate-right"
);
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
let burger = document.getElementById("burger");
let mobileNav = document.getElementById("nav-ul-mobile");
burger.addEventListener("click", () => {
  if (mobileNav.style.display == "flex") mobileNav.style.display = "none";
  else mobileNav.style.display = "flex";
});
