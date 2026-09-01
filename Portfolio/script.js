
/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");


// Open / close mobile menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change hamburger icon
    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close menu when a navigation link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 25px rgba(59, 48, 40, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


/* =========================================================
   REVEAL ELEMENTS WHEN SCROLLING
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, .project-card, .timeline-item, .contact-box"
);


// Add initial hidden state
revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";
});


// Check if elements are visible
function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}


// Run when scrolling
window.addEventListener("scroll", revealOnScroll);

// Run once when page loads
revealOnScroll();


/* =========================================================
   CURRENT YEAR IN FOOTER
========================================================= */

const currentYear = new Date().getFullYear();

const footerText = document.querySelector(".footer-content p");

if (footerText) {
    footerText.textContent =
        `© ${currentYear} Mohd Taufique Alam`;
}


/* =========================================================
   PROJECT LINK PLACEHOLDER
========================================================= */

// Prevent empty "#" project links from jumping to the top
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {
            event.preventDefault();

            alert("Project link will be added soon!");
        }

    });

});


/* =========================================================
   CONTACT LINK PLACEHOLDER
========================================================= */

// Prevent empty "#" social links from doing nothing
const socialLinks = document.querySelectorAll(
    '.contact-links a[target="_blank"]'
);

socialLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {
            event.preventDefault();

            alert("Social profile link will be added soon!");
        }

    });

});

