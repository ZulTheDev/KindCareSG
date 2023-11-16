const express = require('express');
const path = require('path');
const app = express();

// Serve static files directory
//No more build folder since github don't understand.
app.use(express.static(path.join(__dirname, 'Learn')));

// Server-Side-Rendering
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Dynamic route for learn directory
app.get('/learn/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'Learn', `${page}.html`));
});

// Dynamic route for service directory
app.get('/services/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'services', `${page}.html`));
});

// listening to this server
const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`Server successfully loaded in http://localhost:${port}`);
});

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
        window.location.href = '../Learn/main.html';
    }
}

function Home(HomeBut) {
    window.location.href = '../index.html';
}
