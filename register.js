document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.textContent = '';
    successMessage.textContent = '';

    // Simple client-side validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Example of form submission (this should be replaced with actual server-side logic)
    alert('Registration successful!');
    successMessage.textContent = 'Registration successful!';
    window.location.href = 'login.html';
});
