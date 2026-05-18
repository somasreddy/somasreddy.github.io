function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateActiveNav() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-link[href^="#"]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < bottom) {
            links.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}

function setupSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function setupReveal() {
    const items = document.querySelectorAll('.skill-card, .project-card, .qa-architecture-visual');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    items.forEach((item) => {
        item.classList.add('reveal-item');
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothLinks();
    setupReveal();
    updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav, { passive: true });
