const themeToggleBtn = document.getElementById('themeToggle');

// Function to update card images based on theme
const updateCardImages = () => {
    const cards = [
        { selector: '.mission-card img', light: 'images/Mission.png', dark: 'images/Mission-white.png' },
        { selector: '.vision-card img', light: 'images/vision.png', dark: 'images/Vision-white.png' },
        { selector: '.values-card img', light: 'images/Values.png', dark: 'images/Values-white.png' }
    ];

    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

    cards.forEach(card => {
        const imgElement = document.querySelector(card.selector);
        if (imgElement) {
            imgElement.src = currentTheme === 'dark' ? card.dark : card.light;
        }
    });
};

// Initial image update on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCardImages();
});

// Update images on theme toggle
themeToggleBtn.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    updateCardImages(); // Call function to update images when theme changes
});
