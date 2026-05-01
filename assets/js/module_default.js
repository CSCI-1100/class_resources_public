const urlParams = new URLSearchParams(window.location.search);
const hidePlaylist = urlParams.get('noplaylist');
const hideActivities = urlParams.get('noactivities');

if (hidePlaylist) document.getElementById('playlist').style.display = 'none';
if (hideActivities) document.getElementById('activities').style.display = 'none';

if (hidePlaylist && hideActivities) {
    document.getElementsByTagName('nav')[0].style.display = 'none';
    document.getElementsByClassName('tab')[0].style.display = 'none';
}

function scrollToSection(ID) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(ID).scrollIntoView({
        behavior: prefersReducedMotion ? 'instant' : 'smooth'
    });
}
