// JavaScript for AdProxHiren Digital Marketing Website

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scrolling
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
    contactForm.reset();
});

// Testimonial Slider
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const nextButton = document.getElementById("next-testimonial");
const prevButton = document.getElementById("prev-testimonial");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none";
    });
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

showTestimonial(currentIndex);
