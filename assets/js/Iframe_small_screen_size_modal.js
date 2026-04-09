// Flag to track if the user has manually dismissed the modal
let modalManuallyDismissed = false;
let resizeTimeout; // Debounce functionality
const modal = document.querySelector('.screen-size-modal');
// Element used in checkNavWidth() to see how much width changed
const pgTitle = document.getElementById('title');

function checkNavWidth() {
    // Clear the timeout if it exists
    if (resizeTimeout) { clearTimeout(resizeTimeout); }
    // Set a timeout to prevent rapid firing of the function
    resizeTimeout = setTimeout(function() {
        // If the modal was manually dismissed, don't show it again
        if (modalManuallyDismissed) return;
    
        const width = pgTitle.getBoundingClientRect().width;
        // Use a slightly smaller threshold to prevent flickering
        if (width < 280) {  // Changed from 282 to 280 to add some buffer
            modal.style.display = 'block';
            modal.focus();
        } else {
            modal.style.display = 'none';
        }
    }, 250); // 250ms debounce time
}

// Check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkNavWidth();
    // Set up close button listener
    const closeButton = document.querySelector('.close-modal-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
                // Reset the focus to the start of the main section before the navigation
                document.getElementsByName('main')[0].focus();
                // Set the flag when the user manually closes the modal
                modalManuallyDismissed = true;
            }
        });
    }
    // Close modal on Escape key
    modal.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
            // Reset the focus to the start of the main section before the navigation
            document.getElementsByName('main')[0].focus();
        }
    });
});
// Check on window resize with debounce
window.addEventListener('resize', checkNavWidth);