const urlParams = new URLSearchParams(window.location.search);
const hidePlaylist = urlParams.get('noplaylist');
const hideActivities = urlParams.get('noactivities');

if (hidePlaylist) document.getElementById('playlist').style.display = 'none';
if (hideActivities) document.getElementById('activities').style.display = 'none';

if (hidePlaylist && hideActivities) {
    document.getElementsByTagName('nav')[0].style.display = 'none';
    document.getElementsByClassName('tab')[0].style.display = 'none';
}

let collapse = document.getElementsByClassName("collapse-container");
for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
            this.scrollIntoView();
        }
    });
}

function scrollToSection(ID) {
    document.getElementById(ID).scrollIntoView({behavior: 'smooth'});
}