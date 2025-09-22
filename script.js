// Advanced: Random Profile Picture with Preloading
function setRandomProfilePicture() {
    const profilePictures = [
        'Pic1.jpg',
        'Pic2.jpg',
        'Pic3.jpg',
        'Pic4.jpg',
        'Pic5.jpg',
        'Pic6.jpg',
        'Pic7.jpg',
        'Pic8.jpg',
        'Pic9.jpg',
        'Pic10.jpg'
    ];
    
    const imagePath = 'images/';
    const profileImg = document.getElementById('profile-picture');
    
    if (!profileImg) return;
    
    // Preload all images first
    const preloadImages = [];
    profilePictures.forEach(img => {
        const preload = new Image();
        preload.src = imagePath + img;
        preloadImages.push(preload);
    });
    
    // Then set a random one
    const randomImage = profilePictures[Math.floor(Math.random() * profilePictures.length)];
    profileImg.src = imagePath + randomImage;
}
// Navigation Active State Management
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Update active navigation link based on scroll position
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNav);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Smooth Scroll Function for Buttons
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Skills Animation - Animate progress bars when in view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.1
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Project Expand/Collapse Functionality
function toggleProject(button) {
    const projectCard = button.closest('.project-card');
    const expandableContent = projectCard.querySelector('.project-expandable');
    const expandIcon = button.querySelector('.expand-icon');
    const buttonText = button.childNodes[button.childNodes.length - 1];

    if (expandableContent.classList.contains('expanded')) {
        // Collapse
        expandableContent.classList.remove('expanded');
        button.classList.remove('expanded');
        expandIcon.style.transform = 'rotate(0deg)';
        buttonText.textContent = 'Show Details';
    } else {
        // Expand
        expandableContent.classList.add('expanded');
        button.classList.add('expanded');
        expandIcon.style.transform = 'rotate(90deg)';
        buttonText.textContent = 'Hide Details';
    }
}

// Intersection Observer for Fade-in Animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Add scroll animations to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    setupScrollAnimations();
    animateSkillBars();
    setRandomProfilePicture(); // Calling the profile picture function here
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add typing animation to hero title
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeWriterEffect, 500);
});

// Add loading animation for stats
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const finalValue = statElement.textContent;
                
                // Extract number from text (e.g., "70%" -> 70)
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                
                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const increment = numericValue / 30; // 30 steps for smooth animation
                    
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            statElement.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            const suffix = finalValue.replace(/\d/g, '');
                            statElement.textContent = Math.floor(currentValue) + suffix;
                        }
                    }, 50);
                }
                
                observer.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize stats animation
document.addEventListener('DOMContentLoaded', function() {
    animateStats();
});

// Mobile Menu Toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    // Email CTA buttons
    const quickEmailBtn = document.querySelector('.cta-buttons .btn-secondary');
    if (quickEmailBtn) {
        quickEmailBtn.addEventListener('click', function() {
            window.location.href = 'mailto:Somasekhar.r@outlook.com?subject=Inquiry about QA Role';
        });
    }
    
    // Schedule Interview buttons
    const scheduleButtons = document.querySelectorAll('.cta-buttons .btn-primary');
    scheduleButtons.forEach(button => {
        if (button.textContent.includes('Schedule Interview')) {
            button.addEventListener('click', function() {
                // This will open your Calendly link in a new tab
                window.open('https://calendly.com/your-username', '_blank');
            });
        }
    });
});

// Add scroll indicator animation
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
    updateActiveNav();
}, 10);

// Replace the existing scroll listener with debounced version
window.addEventListener('scroll', debouncedScrollHandler);

// Add intersection observer for better performance instead of scroll events
const observerOptions = {
    root: null,
    rootMargin: '-50px 0px -50px 0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

// Observe all sections for navigation updates
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Add smooth reveal animations for project cards
function setupProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        projectObserver.observe(card);
    });
}

// Initialize project animations
document.addEventListener('DOMContentLoaded', function() {
    setupProjectAnimations();
});

// Console welcome message
console.log(`
%c🚀 Welcome to Somasekhar V's Portfolio! %c
%cSenior QA Engineer | Automation Architect
%c8+ Years of Quality Excellence
%cContact: Somasekhar.r@outlook.com
`, 
'color: #2563eb; font-size: 16px; font-weight: bold;',
'',
'color: #059669; font-size: 14px;',
'color: #7c3aed; font-size: 12px;',
'color: #dc2626; font-size: 12px;'
);