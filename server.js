const express = require('express');
const path = require('path');
const app = express();

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Data
const skills = [
    "HTML, CSS, and JavaScript",
    "Responsive Web Design",
    "Python Programming",
    "Accessibility and ARIA Implementation",
    "Unreal Engine",
    "Unity"
];

const projects = [
    {
        title: "Project 1 - Color Picker",
        description: "A simple and interactive color picker tool that allows users to select a color and see the result in multiple formats (hexadecimal, RGB, and HSL).",
        image: "/Assets/1.png",
        alt: "Color Picker Project",
        link: "https://github.com/Eddy-Oo/ColorPicker"
    },
    {
        title: "Project 2 - Champion_Search",
        description: "The Champion search tool helps users find information about champions in League of Legends.",
        image: "/Assets/2.png",
        alt: "League Of Legends Searcher",
        link: "https://github.com/Eddy-Oo/LOL-Champion-Search-"
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { skills });
});

app.get('/projects', (req, res) => {
    res.render('projects', { projects });
});

app.get('/contact', (req, res) => {
    res.render('contact', { message: null });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`New message from ${name} (${email}): ${message}`);
    res.render('contact', { 
        message: `Thank you, ${name}. Your message has been sent successfully.` 
    });
});

// Error handling
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});