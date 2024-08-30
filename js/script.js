document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if passwords match
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Display entered information (excluding password)
    var displayInfo = `
        <strong>First Name:</strong> ${firstName}<br>
        <strong>Last Name:</strong> ${lastName}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Contact Number:</strong> ${contactNumber}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Date of Birth:</strong> ${dob}<br>
        <strong>Username:</strong> ${username}
    `;
    document.getElementById('displayInfo').innerHTML = displayInfo;

    // Clear form fields
    document.getElementById('customerForm').reset();
});

