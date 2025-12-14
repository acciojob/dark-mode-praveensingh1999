//your JS code here. If required.
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save preference to Local Storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Check Local Storage on page load
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};

// Add event listener to the button
document.getElementById('toggle-button').addEventListener('click', toggleDarkMode);