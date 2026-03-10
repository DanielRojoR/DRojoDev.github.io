const navbar = document.querySelector("#navbar");
const anchor = document.querySelector("#scroll-anchor");
const observer = new IntersectionObserver((entries) => {
  navbar.classList.toggle("navbar-scrolled", !entries[0].isIntersecting);
}, { threshold: 1.0 });
observer.observe(anchor);
