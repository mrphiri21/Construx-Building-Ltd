const feedbackItems = document.querySelectorAll('.client-feedback .testimonial-card');
let currentIndex = 0;

function showRandomFeedback() {
    // Hide all feedback items
    feedbackItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show a random feedback item
    const randomIndex = Math.floor(Math.random() * feedbackItems.length);
    feedbackItems[randomIndex].classList.add('active');
}

// Initially show one feedback item
showRandomFeedback();

// Change feedback every 3 seconds
setInterval(showRandomFeedback, 3000);

 