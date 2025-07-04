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
    });
});