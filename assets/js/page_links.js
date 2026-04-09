function scrollToSection(ID) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(ID).scrollIntoView({
        behavior: prefersReducedMotion ? 'instant' : 'smooth'
    });
}