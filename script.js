// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize only needed functionality
    initSmoothScrolling();
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

const engagementTrigger = document.getElementById('engagement-trigger');
const engagementDropdown = document.getElementById('engagement-dropdown');
let engagementTimeoutId;

function showEngagementDropdown() {
    clearTimeout(engagementTimeoutId);
    engagementDropdown.classList.add('active');
    engagementTrigger.classList.add('active');
}

function hideEngagementDropdown() {
    engagementTimeoutId = setTimeout(() => {
        engagementDropdown.classList.remove('active');
        engagementTrigger.classList.remove('active');
    }, 200);
}

engagementTrigger.addEventListener('mouseenter', showEngagementDropdown);
engagementTrigger.addEventListener('mouseleave', hideEngagementDropdown);
engagementDropdown.addEventListener('mouseenter', showEngagementDropdown);
engagementDropdown.addEventListener('mouseleave', hideEngagementDropdown);

// Optional: Close dropdown on click outside
document.addEventListener('click', function(event) {
    if (!engagementDropdown.contains(event.target) && !engagementTrigger.contains(event.target)) {
        engagementDropdown.classList.remove('active');
        engagementTrigger.classList.remove('active');
    }
});

engagementDropdown.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // ...toggle logic...
});

engagementMegaMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});


