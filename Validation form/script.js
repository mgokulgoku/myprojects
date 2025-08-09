// Form Validation Script

// DOM Elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// Utility Functions
function showError(input, errorId) {
    input.classList.add('error');
    input.classList.remove('success');
    document.getElementById(errorId).style.display = 'block';
}

function showSuccess(input, errorId) {
    input.classList.add('success');
    input.classList.remove('error');
    document.getElementById(errorId).style.display = 'none';
}

// Validation Functions
function validateName() {
    const name = nameInput.value.trim();
    const namePattern = /^[A-Za-z]+$/;
    
    if (!namePattern.test(name)) {
        showError(nameInput, 'nameError');
        return false;
    } else {
        showSuccess(nameInput, 'nameError');
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        showError(emailInput, 'emailError');
        return false;
    } else {
        showSuccess(emailInput, 'emailError');
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phonePattern = /^\d{10}$/;
    
    if (!phonePattern.test(phone)) {
        showError(phoneInput, 'phoneError');
        return false;
    } else {
        showSuccess(phoneInput, 'phoneError');
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    
    return isNameValid && isEmailValid && isPhoneValid;
}

// Event Handlers
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form
        form.reset();
        
        // Remove validation styling
        nameInput.classList.remove('success');
        emailInput.classList.remove('success');
        phoneInput.classList.remove('success');
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }
});

// Real-time validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
