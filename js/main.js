// js/main.js

// Get the current year for the footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Back to top button functionality
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('open');
        });

        // Close mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('open');
            });
        });
    }

    // Animate stats section on scroll (if the section exists)
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statItems = document.querySelectorAll('.stat-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statItems.forEach(item => {
                        const targetValue = parseInt(item.getAttribute('data-value').replace('+', '').replace('/7', ''));
                        const speed = 2000 / targetValue; // Adjust speed as needed
                        let count = 0;
                        const countUp = setInterval(() => {
                            const valueElement = item.querySelector('h2');
                            if (valueElement) {
                                valueElement.textContent = Math.min(count, targetValue) + (item.getAttribute('data-value').includes('+') ? '+' : (item.getAttribute('data-value').includes('/7') ? '/7' : ''));
                            }
                            if (count >= targetValue) {
                                clearInterval(countUp);
                            }
                            count++;
                        }, speed);
                    });
                    observer.unobserve(statsSection); // Animate only once
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        observer.observe(statsSection);
    }
});