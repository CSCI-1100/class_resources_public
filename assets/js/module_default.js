const urlParams = new URLSearchParams(window.location.search);
const hidePlaylist = urlParams.get('noplaylist');
const hideActivities = urlParams.get('noactivities');

if (hidePlaylist) document.getElementById('playlist').style.display = 'none';
if (hideActivities) document.getElementById('activities').style.display = 'none';

if (hidePlaylist && hideActivities) {
    document.getElementsByTagName('nav')[0].style.display = 'none';
    document.getElementsByClassName('tab')[0].style.display = 'none';
}

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

function scrollToSection(ID) {
    document.getElementById(ID).scrollIntoView({behavior: 'smooth'});
}

// Check on page load
document.addEventListener('DOMContentLoaded', function() {
    /* All the scrollable elements must be given a tabindex for keyboard accessibility */
    const scrollboxes = document.querySelectorAll('[class*="scrollbox"]:not(.scrollbox-wrapper)');
    scrollboxes.forEach((sb) => {
        sb.setAttribute('tabindex', '0');
    });
});