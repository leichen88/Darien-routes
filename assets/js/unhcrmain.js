// Active state for header
let navLinks = document.querySelectorAll(".navbar .nav-item .nav-link");
let mainId = document.querySelector("main").id;

for (let navLink of navLinks) {
    if(navLink.dataset.active == mainId) {
        navLink.classList.add("active");
    }
}


const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

