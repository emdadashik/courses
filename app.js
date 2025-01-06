// Automatically open the popup when the page loads and close it after 25 seconds
window.onload = function () {
    openPopup();
    setTimeout(closePopup, 10000); // Close after 25 seconds
};

// Function to close the popup
function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
}

// Function to open the popup
function openPopup() {
    document.getElementById("imagePopup").style.display = "block";
}
