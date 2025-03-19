// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
        return;
    }
    
    alert("Your message has been sent successfully!");
    this.reset();
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
