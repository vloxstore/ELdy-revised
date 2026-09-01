const navScreen = document.querySelector(".nav-screen");
const navBtn = document.querySelector(".nav-btn");
const body = document.body;

navBtn.addEventListener("click", function() {
     navScreen.classList.toggle("show");
     navBtn.classList.toggle("cross");
     body.classList.toggle("off-scroll");
});

const darklightToggle = document.querySelector(".dark-light-toggle")

darklightToggle.addEventListener("click", function() {
     body.classList.toggle("light");
})

const revealElements = document.querySelectorAll(".reveal");
const revealElementsleft = document.querySelectorAll(".reveal-left");
const revealElementsright = document.querySelectorAll(".reveal-right");
const revealElementsscale = document.querySelectorAll(".reveal-scale");

const observer = new IntersectionObserver(function(entries) {
     entries.forEach(function(entry) {
     if (entry.isIntersecting) {
          entry.target.classList.add("activate");
     } else {
          entry.target.classList.remove("activate");
     }
});
}, {
     threshold: 0.15
});

revealElements.forEach(function(el) {
     observer.observe(el);
});
revealElementsleft.forEach(function(el) {
     observer.observe(el);
});
revealElementsright.forEach(function(el) {
     observer.observe(el);
});
revealElementsscale.forEach(function(el) {
     observer.observe(el);
});

const footer = document.querySelector(".footer");
const toFooter = document.querySelector(".to-footer");

toFooter.addEventListener("click", function() {
     footer.scrollIntoView({behavior:"smooth"});
});

const section = document.querySelectorAll("section[id], footer[id]");
const navLink = document.querySelectorAll(".nav-link[data-target]");

const sectionObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
              if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      
      navLink.forEach(link => link.classList.remove("active"));
      
      const activeLink = document.querySelector(`.nav-link[data-target="${id}"]`);
      activeLink.classList.add("active");
              }
     });
}, {
     threshold: 0.7
});

section.forEach(section => sectionObserver.observe(section));

navLink.forEach(function(el) {
     el.addEventListener("click", function() {
          const targetId = el.getAttribute("data-target");
          const targetSection = document.querySelector(`#${targetId}`);

          targetSection.scrollIntoView({behavior: "smooth"});

          navScreen.classList.remove("show");
          body.classList.remove("off-scroll");
     })
})

const homeBtn2 = document.querySelector(".header-logo");

homeBtn2.addEventListener("click", ()=> {
     const home = document.querySelector(".hero");

     home.scrollIntoView({behavior:"smooth"});
})

document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log(el, el.scrollWidth);
  }
});document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log(el, el.scrollWidth);
  }
});