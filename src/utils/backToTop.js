export function initializeBackToTopButton() {
// Get a reference to the "Back to Top" button
const backToTopButton = document.getElementById("back-to-top");

// Add a scroll event listener
window.addEventListener("scroll", () => {
    // Show the button when the user scrolls down 200 pixels from the top
    if (window.pageYOffset > 200) {
    backToTopButton.style.display = "block";
    } else {
    backToTopButton.style.display = "none";
    }
});

// Add a click event listener to scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
});
}
