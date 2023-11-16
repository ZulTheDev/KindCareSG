const express = require('express');
const path = require('path');
const app = express();

// Serve static files directory
//No more build folder since github don't understand.
app.use(express.static(path.join(__dirname, 'Learn')));

// Server-Side-Rendering
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Change this line
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

// ... (rest of your code remains the same)
