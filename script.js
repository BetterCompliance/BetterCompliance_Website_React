// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize only needed functionality
    initSmoothScrolling();
    var splide = new Splide('.splide', {
        type   : 'loop',
        perPage: 3,
        focus  : 'center',
        gap: '24px',
        padding: { left: '10%', right: '10%' },
        pagination: true,
        arrows: true,
        breakpoints: {
            1024: { perPage: 2, padding: { left: '5%', right: '5%' } },
            600: { perPage: 1, padding: { left: '10%', right: '10%' } }
        }
    });
    splide.mount();
});

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Dropdown functionality is handled in scripts/header.js


