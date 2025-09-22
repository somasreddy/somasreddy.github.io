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

// Update active navigation link based on scroll position
function updateActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
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

// Add loading animation for stats
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const finalValue = statElement.textContent; // e.g., "70%" or "100+"
                
                // Extract number from text
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
                            statElement.textContent = Math.round(currentValue) + suffix;
                        }
                    }, 20);
                }
                observer.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(value => {
        observer.observe(value);
    });
}

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


document.addEventListener('DOMContentLoaded', function() {
    // Navigation Active State Management (moved from inside here)
    const navLinks = document.querySelectorAll('.nav-link');
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

    // Contact Form Handling (Updated to use fetch)
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formURL = contactForm.getAttribute('action');
            if (!formURL) {
                console.error('Formspree endpoint not found!');
                return;
            }

            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(formURL, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Show success message and reset form
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                        contactForm.style.display = 'block';
                        contactForm.reset();
                    }, 3000);
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            } catch (error) {
                console.error('Submission error:', error);
                alert('Oops! An error occurred.');
            }
        });
    }

    // Schedule Interview Button (Updated)
    const scheduleButton = document.getElementById('schedule-interview-btn');
    if (scheduleButton) {
        scheduleButton.addEventListener('click', function() {
            // As an HR, I expect to be taken directly to a scheduling tool.
            window.open('https://calendly.com/somasreddy', '_blank');
        });
    }

    // Initialize all functionality
    setupScrollAnimations();
    animateSkillBars();
    setRandomProfilePicture();
    animateStats();
    setupProjectAnimations();
    typeWriterEffect();
});

// Listen for scroll events
window.addEventListener('scroll', updateActiveNav);