document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple client-side validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }

    // Example of hardcoded credentials check
    if (username === 'admin' && password === '123') {
        alert('Login successful!');
        // Redirect to dashboard or other page
        window.location.href = 'dashboard.html'; // Example redirect
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
