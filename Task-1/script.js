// JavaScript for handling clicks and showing more content

// Function to open site in new tab
function openSite(url) {
    window.open(url, '_blank');
}

// Function to download site
function downloadSite(url) {
    window.location.href = url;
}

// Event listeners for cards and buttons
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        openSite(this.dataset.url);
    });
});

document.querySelectorAll('.download-btn').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents triggering the card click
        downloadSite(this.dataset.url);
    });
});

// Show more logic
document.getElementById('show-more').addEventListener('click', function() {
    document.getElementById('coming-soon').classList.remove('d-none');
    document.getElementById('show-more').classList.add('d-none'); // Hide the "Show More" button after it's clicked
});
