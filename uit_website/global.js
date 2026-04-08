function scrollToSection(ID) {
    document.getElementById(ID).scrollIntoView({behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollboxes = document.querySelectorAll('[class^="scrollbox"]');

    scrollboxes.forEach((sb, i) => {
        sb.setAttribute('tabindex', '0');
    });
});