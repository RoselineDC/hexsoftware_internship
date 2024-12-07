function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Show content
      } else {
        content.style.display = "none"; // Hide content
      }
    });
  });
});

// form validation
// https://script.google.com/macros/s/AKfycbzQKy-dfDGKS2J75kyC32N2ZNDhEUiD-M8AMk2vM-FMyicZ3q3jUSdIflkl47Hi1hFI0g/exec

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form default submission

    // Collect form data
    const formData = {
        fullName: document.getElementById('name').value,
        phoneNumber: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('sub').value,
        message: document.getElementById('msg').value,
    };

     // Send form data to the server
     fetch('/save-form', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
      .then(response => response.json())
      .then(data => {
          console.log('Server Response:', data);
          alert('Form submitted successfully!');
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to submit form.');
      });
});
// document.getElementById('contactForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent form default submission

//   const formData = {
//       fullName: document.getElementById('name').value,
//       phoneNumber: document.getElementById('phone').value,
//       email: document.getElementById('email').value,
//       subject: document.getElementById('sub').value,
//       message: document.getElementById('msg').value,
//   };

//   fetch('http://localhost:4000/submit-form', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//   })
//       .then(response => response.text())
//       .then(data => {
//           alert(data);
//       })
//       .catch(error => {
//           alert('Error: ' + error.message);
//       });
// });
