// Smooth Scroll for Navigation
document.addEventListener('DOMContentLoaded', function() {

    // Common Form Validation for Signup and Login Pages
    const forms = document.querySelectorAll('form');  // Get all forms
  
    forms.forEach(form => {
      form.addEventListener('submit', function(event) {
        const email = form.querySelector('input[name="email"]');
        const password = form.querySelector('input[name="password"]');
        const fullname = form.querySelector('input[name="fullname"]');
        const repassword = form.querySelector('input[name="repassword"]');
        
        // Login form validation
        if (form.id === 'login-form') {
          if (email && password && (email.value.trim() === '' || password.value.trim() === '')) {
            event.preventDefault();
            alert('Please fill in both email and password fields.');
          } else if (email && !validateEmail(email.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
          }
        }
  
        // Signup form validation
        if (form.id === 'signup-form') {
          if (fullname && email && password && repassword && 
            (fullname.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || repassword.value.trim() === '')) {
            event.preventDefault();
            alert('Please fill in all fields.');
          } else if (email && !validateEmail(email.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
          } else if (password && repassword && password.value !== repassword.value) {
            event.preventDefault();
            alert('Passwords do not match.');
          }
        }
      });
    });
  
    // Function to validate email format
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  
    // Handle search functionality (for pages with search bar)
    const searchInput = document.querySelector('.search-cart input');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        console.log('Search Term: ', searchInput.value);  // Handle search action (e.g., filtering, API calls, etc.)
      });
    }
  
    // Smooth scroll to sections (e.g., for in-page navigation links)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);  // Get the ID of the target section
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,  // Adjust scroll position (optional)
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Cart feature for Gear Store (Optional)
    const cart = document.querySelector('.cart');
    if (cart) {
      const checkoutButton = cart.querySelector('#checkout-button');
      checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout...');
      });
    }
  
  });

  

  
  