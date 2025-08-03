// Highlight navigation links based on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Simple form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            alert("Thank you for contacting me!");
            form.reset();
        });
    }
});

// Theme toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    toggle.addEventListener("change", () => {
        body.classList.toggle("dark");
        localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    });

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        toggle.checked = true;
    }
});