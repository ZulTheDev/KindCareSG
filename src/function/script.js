//Collapsable text and content
function toggleCollapse(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}
//Sub menu for  learn directory
function toggleSubmenu(submenuType) {
    var submenu = null;

    //Statement which one user click on
    if (submenuType === 'Learn') {
        submenu = document.getElementById('submenu');
    } else if (submenuType === 'Hotline') {
        submenu = document.getElementById('subhotline');
    } else if (submenuType === 'Therapy') {
        submenu = document.getElementById('subtherapy');
    }

    // Toggle hidden
    if (submenu) {
        submenu.classList.toggle('hidden');
    }
}

function openCat(catId) {
    if (catId === 'NeedTalk') {
        // Redirect to another HTML page
        window.location.href = '/services/';
    }
    else if (catId === 'LearnMentalHealth') {
        window.location.href = '/Learn/main.html';
    }
}

function Home(HomeBut) {
    window.location.href = '/index.html';
}

