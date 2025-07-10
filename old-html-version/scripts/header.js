// Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mega-menu-overlay';
    document.body.appendChild(overlay);

    // Solutions Dropdown
    const solutionsDropdown = document.getElementById('solutions-dropdown');
    const solutionsMegaMenu = document.getElementById('solutions-mega-menu');
    const solutionsDropdownItem = solutionsDropdown ? solutionsDropdown.closest('.dropdown') : null;

    // Engagement Suits Dropdown
    const engagementDropdown = document.getElementById('engagement-dropdown');
    const engagementMegaMenu = document.getElementById('engagement-mega-menu');
    const engagementDropdownItem = engagementDropdown ? engagementDropdown.closest('.dropdown') : null;

    // Company Dropdown
    const companyDropdownItem = document.querySelector('.company-dropdown');
    const companyMenu = companyDropdownItem ? companyDropdownItem.querySelector('.company-menu') : null;
    const companyDropdown = companyDropdownItem ? companyDropdownItem.querySelector('.dropdown-toggle') : null;

    // Generic dropdown functions
    function openDropdown(dropdownItem, megaMenu) {
        // Close any other open dropdowns first
        closeAllDropdowns();

        dropdownItem.classList.add('active');
        megaMenu.classList.add('active');
        overlay.classList.add('active');
    }

    function closeDropdown(dropdownItem, megaMenu) {
        dropdownItem.classList.remove('active');
        megaMenu.classList.remove('active');
        overlay.classList.remove('active');
    }

    function closeAllDropdowns() {
        if (solutionsDropdownItem && solutionsMegaMenu) {
            solutionsDropdownItem.classList.remove('active');
            solutionsMegaMenu.classList.remove('active');
        }
        if (engagementDropdownItem && engagementMegaMenu) {
            engagementDropdownItem.classList.remove('active');
            engagementMegaMenu.classList.remove('active');
        }
        if (companyDropdownItem) {
            companyDropdownItem.classList.remove('active');
        }
        overlay.classList.remove('active');
    }

    // Solutions Dropdown Event Listeners
    if (solutionsDropdown && solutionsMegaMenu && solutionsDropdownItem) {
        solutionsDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = solutionsDropdownItem.classList.contains('active');

            if (isActive) {
                closeDropdown(solutionsDropdownItem, solutionsMegaMenu);
            } else {
                openDropdown(solutionsDropdownItem, solutionsMegaMenu);
            }
        });

        solutionsMegaMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Engagement Suits Dropdown Event Listeners
    if (engagementDropdown && engagementMegaMenu && engagementDropdownItem) {
        engagementDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = engagementDropdownItem.classList.contains('active');

            if (isActive) {
                closeDropdown(engagementDropdownItem, engagementMegaMenu);
            } else {
                openDropdown(engagementDropdownItem, engagementMegaMenu);
            }
        });

        engagementMegaMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Close on overlay click
    overlay.addEventListener('click', closeAllDropdowns);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (solutionsDropdownItem && !solutionsDropdownItem.contains(e.target)) {
            if (solutionsDropdownItem.classList.contains('active')) {
                closeDropdown(solutionsDropdownItem, solutionsMegaMenu);
            }
        }
        if (engagementDropdownItem && !engagementDropdownItem.contains(e.target)) {
            if (engagementDropdownItem.classList.contains('active')) {
                closeDropdown(engagementDropdownItem, engagementMegaMenu);
            }
        }
        if (companyDropdownItem && !companyDropdownItem.contains(e.target)) {
            if (companyDropdownItem.classList.contains('active')) {
                closeDropdown(companyDropdownItem, companyMenu);
            }
        }
    });

    // Company Dropdown Event Listeners
    if (companyDropdown && companyDropdownItem) {
        companyDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = companyDropdownItem.classList.contains('active');

            if (isActive) {
                closeDropdown(companyDropdownItem, companyMenu);
            } else {
                openDropdown(companyDropdownItem, companyMenu);
            }
        });

        if (companyMenu) {
            companyMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // Smooth scroll to top functionality
    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Logo click - scroll to top
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToTop();
        });
    }

    // Also handle logo image/link clicks
    const logoLink = document.querySelector('.nav-logo a');
    const logoImg = document.querySelector('.nav-logo img');

    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToTop();
        });
    }

    if (logoImg) {
        logoImg.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollToTop();
        });
    }
});

// Smooth scroll to top on page refresh/load
window.addEventListener('load', function() {
    // Small delay to ensure page is fully loaded
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100);
});

// Also handle page refresh (beforeunload)
window.addEventListener('beforeunload', function() {
    // Set scroll position to top for next load
    window.scrollTo(0, 0);
});