// Optional JavaScript for additional functionality
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        window.location.href = this.onclick(); // Redirect to the product link
    });
});

// Close item details when clicking outside (optional)
document.addEventListener('click', function() {
    document.querySelectorAll('.item').forEach(item => {
        item.style.display = 'none';
    });
});