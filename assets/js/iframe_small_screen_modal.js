// Flag to track if the user has manually dismissed the modal
let modalManuallyDismissed = false;
let resizeTimeout; // Debounce functionality
const modal = document.querySelector('.screen-size-modal');
// Element used in checkNavWidth() to see how much width changed
const pgTitle = document.getElementsByTagName('h1')[0];

function checkNavWidth() {
    // Clear the timeout if it exists
    if (resizeTimeout) { clearTimeout(resizeTimeout); }
    // Set a timeout to prevent rapid firing of the function
    resizeTimeout = setTimeout(function() {
        // If the modal was manually dismissed, don't show it again
        if (modalManuallyDismissed) return;
    
        const width = pgTitle.getBoundingClientRect().width;
        // Use a slightly smaller threshold to prevent flickering
        if (width < 251) {
            modal.style.display = 'block';
            modal.focus();
        } else {
            modal.style.display = 'none';
        }
    }, 250); // 250ms debounce time
}

function resetFocus() {
    document.getElementsByTagName('h1')[0].focus();
}

function resetFocus(el) { el.focus(); }

// Check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkNavWidth();

    // Set up close button listener
    const closeButton = document.querySelector('.close-modal-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
                // Important: Return focus to the start of the page
                // Customize this if it is not suitable for your use case
                resetFocus();
                // Set the flag when the user manually closes the modal
                modalManuallyDismissed = true;
            }
        });
    } else { console.error(".close-modal-button is missing! Fix it!"); }

    // Close modal on Escape key
    modal.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
            // Important: Return focus to the start of the page
            // Customize this if it is not suitable for your use case
            resetFocus();
        }
    });

    try { document.getElementsByClassName('modal')[0].setAttribute('tabindex', '-1'); }
    catch { console.error("Class 'modal' is not found. If you are not using the .modal class, you don't need to import this script.") }
});
// Check on window resize with debounce
window.addEventListener('resize', checkNavWidth);