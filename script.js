// Add sticky class when the user scrolls past the top
window.onscroll = function() {
    var navbar = document.querySelector('nav.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  // our services scroll down transition
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
  
  //event listener for each servies card
      // Add event listeners to each card
      document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'services.html';
        });
    });
  


    // document.addEventListener('DOMContentLoaded', () => {
    //     const themeToggleBtn = document.getElementById('themeToggle');
    //     const logoImg = document.querySelector('#logo .logo'); // Select the logo image
    
    //     // Check for stored theme in local storage
    //     const storedTheme = localStorage.getItem('theme');
    //     if (storedTheme) {
    //         document.body.classList.toggle('dark-theme', storedTheme === 'dark');
    //         logoImg.src = storedTheme === 'dark' ? 'logo/logo-white.png' : 'logo/logo-.png';
    //     }
    
    //     themeToggleBtn.addEventListener('click', () => {
    //         const isDarkTheme = document.body.classList.toggle('dark-theme');
    //         logoImg.src = isDarkTheme ? 'logo/logo-black.png' : 'logo/logo-white.png'; // Change logo based on theme
    
    //         // Store theme preference in local storage
    //         localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    //     });
    // });


// Theme change
  // const themeToggleBtn = document.getElementById('theme-toggle');
  // const body = document.body;
  
  // // Check for previously saved theme in localStorage
  // const savedTheme = localStorage.getItem('theme');
  // if (savedTheme) {
  //   body.classList.toggle('dark-theme', savedTheme === 'dark');
  //   themeToggleBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
  // }
  
  // // Theme toggle button click event
  // themeToggleBtn.addEventListener('click', () => {
  //   body.classList.toggle('dark-theme');
  //   const isDarkTheme = body.classList.contains('dark-theme');
  //   themeToggleBtn.textContent = isDarkTheme ? 'Light Mode' : 'Dark Mode';
  //   localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light'); // Save theme preference
  // });

// Get the toggle switch element
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
        logoimg.src = savedTheme === 'dark-theme' ? '/logo/logo-white.png' : '/logo/logo-black.png';
        logoImg.src = savedTheme === 'dark-theme' ? '/logo/logo-white.png' : '/logo/logo-black.png';
    } else {
        document.body.classList.add('light-theme'); // Default to light theme if no preference is saved
        logoimg.src = '/logo/logo-black.png'; // Set default logo
        logoImg.src = '/logo/logo-black.png'; // Set default logo
    }
}); 
    
// Toggle between light and dark modes
themeToggleBtn.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        logoimg.src = '/logo/logo-white.png'; // Change logo to dark theme
        logoImg.src = '/logo/logo-white.png'; // Change logo to dark theme
        localStorage.setItem('theme', 'dark-theme'); // Save the theme preference
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        logoimg.src = '/logo/logo-black.png'; // Change logo to light theme
        logoImg.src = '/logo/logo-black.png'; // Change logo to light theme
        localStorage.setItem('theme', 'light-theme');
    }
});


//mouse tracking
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


//particle effect
// const canvas = document.getElementById('particleCanvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let particles = [];

// class Particle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.size = Math.random() * 5 + 1;
//     this.color = `rgba(255, 255, 255, 0.7)`;
//     this.speedX = Math.random() * 3 - 1.5;
//     this.speedY = Math.random() * 3 - 1.5;
//   }
//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }
//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// }

// function init() {
//   for (let i = 0; i < 100; i++) {
//     particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   particles.forEach((particle) => {
//     particle.update();
//     particle.draw();
//   });
//   requestAnimationFrame(animate);
// }

// canvas.addEventListener('mousemove', (event) => {
//   for (let i = 0; i < 5; i++) {
//     particles.push(new Particle(event.x, event.y));
//   }
// });

// init();
// animate();


//particle 2
// Get the canvas element and set up the context
// Get the canvas element and set up the context
// Get the canvas element and set up the context
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
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => {
        particle.update();
    });
}

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
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance =
                (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
                (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - distance / 20000;
                ctx.strokeStyle = 'var(--text-color,' + opacityValue + ')';
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
          // Change color to match theme
            ctx.strokeStyle = getParticleColor(); 
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
themeToggleBtn = document.getElementById('themeToggle'); // Assuming you have a toggle button

// Update particle color when theme changes
themeToggleBtn.addEventListener('click', () => {
    init(); // Reinitialize particles with new color
});


// service page
// Script to animate services on scroll
document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('service');

    const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card').forEach(card => {
        servicesObserver.observe(card);
    });
});
    // const sections = document.querySelectorAll('.fade-in-section');
    // const options = {
    //     threshold: 0.1
    // };

    // const aboutObserver = new IntersectionObserver(function(entries, observer) {
    //     entries.forEach(entry => {
    //         if (!entry.isIntersecting) return;
    //         entry.target.classList.add('visible');
    //         observer.unobserve(entry.target);
    //     });
    // }, options);
document.addEventListener('DOMContentLoaded', function () {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-about');
            } else {
                entry.target.classList.remove('fade-in-about');
            }
        });
    });

});


//About page
// Parallax Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.about-hero');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Hover Effect for Team Members
const teamMembers = document.querySelectorAll('.team-member img');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
    });
    member.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
}
