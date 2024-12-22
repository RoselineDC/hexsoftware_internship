document.getElementById("userForm").addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value,
        phone: document.getElementById('phone').value,     
    };

    // Check for errors
    try {
        const response = await fetch('/submit', {
            method: 'POST',  // Corrected this line
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
