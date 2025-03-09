// Main JavaScript functionality

// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Change background color button
    document.getElementById('changeColorBtn').addEventListener('click', function() {
        const colors = ['#f5f5f5', '#e8f4f8', '#f8f5e8', '#f0f8e8', '#f8e8e8'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.container').style.backgroundColor = randomColor;
    });

    // Add new card button
    document.getElementById('addCardBtn').addEventListener('click', function() {
        // Create new card element
        const card = document.createElement('div');
        card.className = 'card';
        
        // Add title to card
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = 'New Card ' + (document.querySelectorAll('.card').length + 1);
        
        // Add content to card
        const content = document.createElement('p');
        content.textContent = 'This card was dynamically created with JavaScript. Click anywhere on this card to remove it.';
        
        // Add elements to card
        card.appendChild(title);
        card.appendChild(content);
        
        // Add click event to remove card
        card.addEventListener('click', function() {
            card.remove();
        });
        
        // Add card to container
        document.querySelector('.container').appendChild(card);
    });

    // Current date display
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
    }
});