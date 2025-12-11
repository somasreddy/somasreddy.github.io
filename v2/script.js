// Premium V2 Interactions

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Sidebar ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // Update Active State
            document.querySelectorAll('.nav-items a').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Typewriter Effect for Terminal ---
    const commands = [
        { selector: '.cmd-1', text: 'whoami', delay: 500 },
        { selector: '.cmd-2', text: 'cat role.txt', delay: 1500 },
        { selector: '.cmd-3', text: 'run expertise --verbose', delay: 2500 }
    ];

    // Function to simulate typing
    async function typeText(element, text) {
        element.textContent = '';
        element.style.opacity = '1';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text.charAt(i);
            await new Promise(r => setTimeout(r, 60)); // Typing speed
        }
    }

    // Sequence Orchestrator
    async function runTerminalSequence() {
        // Element refs (We will need to add these classes to HTML)
        const cmd1 = document.querySelector('.cmd-whoami');
        // Initial state is statically rendered in HTML for SEO/No-JS. 
        // For animation, we could clear them, but simpler is to let them be.
        // Actually, let's just animate the cursor blinking.

        // Use IntersectionObserver to trigger animations when sections scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.repo-card, .stack-category').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Add class for animate
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            .in-view { opacity: 1 !important; transform: translateY(0) !important; }
        `;
        document.head.appendChild(styleSheet);
    }

    runTerminalSequence();
});

console.log('%c QA Expert Portfolio V2 Loaded ', 'background: #6366f1; color: #fff; padding: 5px; border-radius: 3px;');
