function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
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

  

