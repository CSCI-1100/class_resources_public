const modal = document.getElementsByClassName("modal")[0];
const closeModal = document.getElementById('close-modal-button');

function openModal() {
    modal.style.display = "block";
    
    /**
     * Important keyboard accessibility note!
     * 
     * Modal must be focused when it opens (make sure that modal has been set with tabindex="-1" in HTML)
     */
    modal.focus();
}

function resetFocus() {
    document.getElementsByTagName('h1')[0].focus();
}

function resetFocus(el) { el.focus(); }

document.addEventListener('DOMContentLoaded', function() {
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

    // Close on Escape key
    modal.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
            // Important: Return focus to the start of the page
            // Customize this if it is not suitable for your use case
            resetFocus();
        }
    })

    try { document.getElementsByClassName('modal')[0].setAttribute('tabindex', '-1'); }
    catch { console.error("Class 'modal' is not found. If you are not using the .modal class, you don't need to import this script.") }
});