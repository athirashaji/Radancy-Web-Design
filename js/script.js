document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn");
    button.addEventListener("click", function () {
        alert("Thank you for your interest! Redirecting...");
        window.location.href = "#"; // Add the correct link here
    });
});