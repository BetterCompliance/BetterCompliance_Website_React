// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize only needed functionality
    initSmoothScrolling();
    initTestimonialsMarquee();

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

// Testimonials Marquee Functionality
function initTestimonialsMarquee() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');

    if (!track || cards.length === 0) return;

    // Add individual hover listeners to each card
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            track.style.animationPlayState = 'paused';
        });

        card.addEventListener('mouseleave', function() {
            track.style.animationPlayState = 'running';
        });
    });

    // Also add hover listeners to the track itself for extra coverage
    track.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
}

// Dropdown functionality is handled in scripts/header.js


