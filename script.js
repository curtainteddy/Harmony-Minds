document.addEventListener('DOMContentLoaded', function() {
    // Load the header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
});


// JavaScript to handle like button clicks and increase the like count
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        let likeCount = this.nextElementSibling;
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;

        // Add class for a quick animation effect
        this.classList.add('liked');
        setTimeout(() => this.classList.remove('liked'), 300);
    });
});
