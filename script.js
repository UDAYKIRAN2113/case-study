// Function to generate a random customer ID
function generateCustomerId() {
    // Generate a random 6-digit number
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to handle registration
function registerUser(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    // Generate customer ID
    const customerId = generateCustomerId();

    // Store registration data in local storage
    localStorage.setItem('customerId', customerId);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('address', address);
    localStorage.setItem('contact', contact);

    // Alert with customer ID
    alert(`Registration successful! Your Customer ID is: ${customerId}`);

    // Navigate to login page
    window.location.href = 'loginpage.html';
}

function loginUser(event) {
    event.preventDefault();
    // Navigate to home page
    window.location.href = 'home.html';
}

// Function to handle logout
function logoutUser() {
    // Clear local storage
    localStorage.clear();
    // Navigate to login page
    window.location.href = 'loginpage.html';
}
// Function to add item to cart
function addToCart(productName) {
    alert(`Added ${productName} to cart.`);
    // Implement cart functionality here
}

// Event listeners
document.getElementById('registrationForm').addEventListener('submit', registerUser);
document.getElementById('loginForm').addEventListener('submit', loginUser);
