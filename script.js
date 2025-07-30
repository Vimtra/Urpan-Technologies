// Add sticky class when the user scrolls past the top
window.onscroll = function() {
    var navbar = document.querySelector('nav.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
};

// Our services scroll down transition
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let servicesSection = document.getElementById('services');
    const servicesPosition = servicesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.7; // Adjust this value for transition trigger point

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Scroll down (triggering the transition)
    if (servicesPosition < screenPosition && currentScrollTop > lastScrollTop) {
        servicesSection.classList.add('scrolled-down');
        servicesSection.classList.remove('scrolled-up');
    }
    // Scroll up (triggering the fade out)
    else if (servicesPosition > screenPosition && currentScrollTop < lastScrollTop) {
        servicesSection.classList.add('scrolled-up');
        servicesSection.classList.remove('scrolled-down');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

// Event listener for each services card
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = 'services.html';
    });
});

// Theme change handling
let themeToggleBtn = document.getElementById('themeToggle');
const logoImg = document.querySelector('.logo'); // Select the logo image
const logoimg = document.getElementById('Logo'); // Select the logo image

// Check the user's saved theme preference on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggleBtn.checked = savedTheme === 'dark-theme'; // Set the slider position based on the saved theme

        // Change logo based on saved theme
        const logoSrc = savedTheme === 'dark-theme' ? './logo/logo-white.png' : './logo/logo-black.png';
        logoimg.src = logoSrc;
        logoImg.src = logoSrc;
    } else {
        document.body.classList.add('light-theme'); // Default to light theme if no preference is saved
        const defaultLogoSrc = './logo/logo-black.png';
        logoimg.src = defaultLogoSrc;
        logoImg.src = defaultLogoSrc;
    }
});

// Toggle between light and dark modes
themeToggleBtn.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        const darkLogoSrc = './logo/logo-white.png';
        logoimg.src = darkLogoSrc;
        logoImg.src = darkLogoSrc;
        localStorage.setItem('theme', 'dark-theme'); // Save the theme preference
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        const lightLogoSrc = './logo/logo-black.png';
        logoimg.src = lightLogoSrc;
        logoImg.src = lightLogoSrc;
        localStorage.setItem('theme', 'light-theme');
    }
});

// Mouse tracking effect
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.mouse-track-layer');
    const speedFactors = [15, 30, 45]; // Speed for each layer

    layers.forEach((layer, index) => {
        const speed = speedFactors[index];
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Particle effect (Canvas)
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero-section').offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let particlesArray;

// Particle class definition
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Update particle position
    update() {
        // Check if particle is within canvas boundaries
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        // Draw particle
        this.draw();
    }
}

// Function to determine the particle color based on theme
function getParticleColor() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    return isDarkTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
}

// Create particles
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 9000; // Adjust density
    for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2) + size * 2;
        let directionX = (Math.random() - 0.5) * 1;
        let directionY = (Math.random() - 0.5) * 1;
        let color = getParticleColor(); // Get color based on theme

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     particlesArray.forEach((particle) => {
//         particle.update();
//     });
// }

// Mouse interactivity
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80),
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Connect particles to mouse
function connect() {
    let _opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance =
                (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
                (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                _opacityValue = 1 - distance / 20000;
                ctx.strokeStyle = getParticleColor(); // Use theme color
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }

    // Additional connection to mouse
    for (let i = 0; i < particlesArray.length; i++) {
        let distance =
            (mouse.x - particlesArray[i].x) * (mouse.x - particlesArray[i].x) +
            (mouse.y - particlesArray[i].y) * (mouse.y - particlesArray[i].y);
        if (distance < mouse.radius * mouse.radius) {
            ctx.strokeStyle = getParticleColor(); // Match theme color
            ctx.lineWidth = 2; // Change width for emphasis
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
            ctx.stroke();
        }
    }
}

// Update animation loop
function animateWithConnections() {
    requestAnimationFrame(animateWithConnections);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => {
        particle.update();
    });
    connect();
}

// Initialize and animate particles
init();
animateWithConnections();

// Change particle color based on theme when toggled
themeToggleBtn.addEventListener('click', () => {
    init(); // Reinitialize particles with new color
});

// Service page - Animate services on scroll
document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    services.forEach((service) => observer.observe(service));
});


        (function() {
            const canvas = document.getElementById('sparkCanvas');
            const container = document.getElementById('clickContainer');
            const ctx = canvas.getContext('2d');

            // Configuration
            const sparkColor = '#fff';
            const sparkSize = 10;
            const sparkRadius = 15;
            const sparkCount = 8;
            const duration = 400; // ms
            const easing = 'ease-out';
            const extraScale = 1.0;

            let sparks = [];

            // Resize canvas to container size
            function resizeCanvas() {
                const rect = container.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            // Easing functions
            function easeFunc(t) {
                switch (easing) {
                    case 'linear': return t;
                    case 'ease-in': return t * t;
                    case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    default: return t * (2 - t); // ease-out
                }
            }

            // Draw sparks
            function draw(timestamp) {
                if (!draw.startTime) draw.startTime = timestamp;
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                sparks = sparks.filter(spark => {
                    const elapsed = timestamp - spark.startTime;
                    if (elapsed >= duration) return false;

                    const progress = elapsed / duration;
                    const eased = easeFunc(progress);

                    const distance = eased * sparkRadius * extraScale;
                    const lineLength = sparkSize * (1 - eased);

                    const x1 = spark.x + distance * Math.cos(spark.angle);
                    const y1 = spark.y + distance * Math.sin(spark.angle);
                    const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                    const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

                    ctx.strokeStyle = sparkColor;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();

                    return true;
                });

                requestAnimationFrame(draw);
            }

            requestAnimationFrame(draw);

            // Handle click event
            container.addEventListener('click', (e) => {
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const now = performance.now();

                for (let i = 0; i < sparkCount; i++) {
                    sparks.push({
                        x,
                        y,
                        angle: (2 * Math.PI * i) / sparkCount,
                        startTime: now
                    });
                }
            });
        })();
