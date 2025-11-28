// Current slide index
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeSlideshow();
    initializeAnimations();
    initializeSkillBars();
    setupBlurredBackgrounds();
});

// Initialize slideshow functionality
function initializeSlideshow() {
    if (slides.length === 0) return;
    
    // Start automatic slideshow
    startSlideshow();
    
    // Pause on hover, resume when leaving
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
}

// Start automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 4000); // Change slide every 4 seconds
}

// Pause automatic slideshow
function pauseSlideshow() {
    clearInterval(slideInterval);
}

// Show specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    
    // Ensure index is within bounds
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Show current slide
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
        indicators[currentSlideIndex].classList.add('active');
    }
}

// Go to next slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Go to previous slide
function previousSlide() {
    showSlide(currentSlideIndex - 1);
}

// Change slide (called by navigation arrows)
function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        previousSlide();
    }
    
    // Restart automatic slideshow
    pauseSlideshow();
    startSlideshow();
}

// Go to specific slide (called by indicators)
function currentSlide(index) {
    showSlide(index - 1); // Convert to 0-based index
    
    // Restart automatic slideshow
    pauseSlideshow();
    startSlideshow();
}

// Initialize scroll-triggered animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special handling for skill bars
                if (entry.target.classList.contains('skills-card')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.portfolio-card, .message-card, .timeline-item, .profile-section'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// Initialize and animate skill bars
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.setProperty('--width', width + '%');
    });
}

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
            bar.classList.add('animate');
        }, index * 200); // Stagger the animations
    });
}

// Add floating animation to birthday elements
function createFloatingElements() {
    const hero = document.querySelector('.hero');
    const birthday = document.querySelector('.birthday-message');
    
    // Add more confetti elements
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        if (hero) {
            hero.querySelector('.floating-elements').appendChild(confetti);
        }
    }
}

// Add smooth scrolling for any internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add keyboard navigation for slideshow
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Add touch/swipe support for mobile
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    if (!startX || !startY) {
        return;
    }

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    
    const diffX = startX - endX;
    const diffY = startY - endY;
    
    // Only trigger if the swipe was primarily horizontal
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) > 50) { // Minimum swipe distance
            if (diffX > 0) {
                // Swipe left - next slide
                changeSlide(1);
            } else {
                // Swipe right - previous slide
                changeSlide(-1);
            }
        }
    }
    
    startX = 0;
    startY = 0;
});

// Setup blurred backgrounds for slides
function setupBlurredBackgrounds() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            // Set the background image for the blurred effect
            slide.style.setProperty('--bg-image', `url('${img.src}')`);
        }
    });
}

// Add birthday surprise animation on page load
function addBirthdaySuprise() {
    setTimeout(() => {
        // Create birthday popup
        const popup = document.createElement('div');
        popup.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 30px;
                border-radius: 20px;
                text-align: center;
                z-index: 1000;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                animation: bounceIn 1s ease;
            ">
                <h2 style="margin-bottom: 15px; font-size: 2rem;">🎉 Surprise! 🎉</h2>
                <p style="margin-bottom: 20px; font-size: 1.2rem;">Happy Birthday, Akshita!</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: white;
                    color: #667eea;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: bold;
                ">Thank you! ❤️</button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // Auto remove after 5 seconds if not clicked
        setTimeout(() => {
            if (document.body.contains(popup)) {
                popup.remove();
            }
        }, 5000);
        
    }, 3000); // Show popup after 3 seconds
}

// Initialize birthday surprise
document.addEventListener('DOMContentLoaded', function() {
    // Only show surprise on first visit
    if (!sessionStorage.getItem('birthdaySupriseShown')) {
        addBirthdaySuprise();
        sessionStorage.setItem('birthdaySupriseShown', 'true');
    }
});

// Add click effect to buttons and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll(
        'button, .indicator, .nav-arrow, .contact-item'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);