// Mobile Navigation Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact Form Handling
const inquiryForm = document.getElementById('inquiryForm');

inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh
    
    const name = document.getElementById('name').value;
    
    // Show success message
    alert(`Thank you, ${name}! Your inquiry for Vivaan Electricals has been submitted successfully. We will get back to you soon.`);
    
    // Reset Form
    inquiryForm.reset();
});
