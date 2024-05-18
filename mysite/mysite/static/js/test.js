// Show loading image when the page starts loading
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loading').style.display = 'block';
});

// Hide loading image when all scripts are loaded
window.addEventListener("load", function() {
    document.getElementById('loading').style.display = 'none';
});
