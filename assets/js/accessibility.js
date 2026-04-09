// Check on page load
document.addEventListener('DOMContentLoaded', function() {
    /* Find the <h1> and make it focusable (convenient focus reset point for modals; used by my modal JS scripts) */
    try { document.getElementsByTagName('h1')[0].setAttribute('tabindex', '0'); }
    catch { console.error("This page is missing <h1>. Fix this!\nModal scripts cannot reset focus without it.") }

    /* All the scrollable elements must be given a tabindex for keyboard accessibility */
    const scrollboxes = document.querySelectorAll('[class*="scrollbox"]:not(.scrollbox-wrapper)');
    scrollboxes.forEach((sb) => {
        sb.setAttribute('tabindex', '0');
    });

    const triggers = document.querySelectorAll('.collapse-container');
    triggers.forEach(trigger => {
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('aria-expanded', 'false');

        // Give each content div a unique id for aria-controls
        const content = trigger.nextElementSibling;
        const uid = `expand-${crypto.randomUUID()}`;
        content.id = uid;
        trigger.setAttribute('aria-controls', uid);

        const activate = () => {
            trigger.classList.toggle('active');
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', String(!isExpanded));
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
                trigger.scrollIntoView();
            }
        };

        trigger.addEventListener('click', activate);
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
        });
    });
});
