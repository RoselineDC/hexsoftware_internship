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

// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form default submission

//     // Collect form data
//     const formData = {
//         fullName: document.getElementById('name').value,
//         phoneNumber: document.getElementById('phone').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('sub').value,
//         message: document.getElementById('msg').value,
//     };

//     // Example: Log data to console (replace with API call or email logic)
//     console.log('Form Data Submitted:', formData);
//     alert('Form submitted successfully!');
// });

// // form submision
// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent form submission
//   const button = document.getElementById("submitButton");
//   button.style.backgroundColor = "white";
// });
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        fullName: document.getElementById('name').value,
        phoneNumber: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('sub').value,
        message: document.getElementById('msg').value,
    };

    const scriptURL = " https://script.google.com/macros/s/AKfycbzQKy-dfDGKS2J75kyC32N2ZNDhEUiD-M8AMk2vM-FMyicZ3q3jUSdIflkl47Hi1hFI0g/exec"; // Replace with your Google Apps Script URL

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => response.text())
        .then((text) => {
            console.log('Form Data Submitted:', text);
            alert('Form submitted successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Form submission failed.');
        });
});
