// Tab functionality
document.querySelectorAll('.design-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs and content
        document.querySelectorAll('.design-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.design-content').forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab
        this.classList.add('active');

        // Show the corresponding content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Back to top button visibility and scroll behavior
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    // Show button after scrolling past 300px
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle Functionality
const mobileMenuButton = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = mobileMenuButton.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            // Reset mobile menu icon
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
