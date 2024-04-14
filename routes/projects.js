const express = require('express');
const router = express.Router();

// Sample projects data (replace with your actual data source)
const projects = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' }
];

// Route to get all projects
router.get('/', (req, res) => {
    res.json(projects);
});

// Route to get a specific project by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const project = projects.find(project => project.id === id);

    if (!project) {
        res.status(404).json({ error: 'Project not found' });
    } else {
        res.json(project);
    }
});

module.exports = router;
