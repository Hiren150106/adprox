// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// Contact Form Submission
document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Form reload होने से रोकेगा

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
        alert("कृपया सभी फ़ील्ड भरें।");
        return;
    }

    alert("आपका संदेश सफलतापूर्वक भेज दिया गया! 🚀");
    document.querySelector("#contactForm").reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
