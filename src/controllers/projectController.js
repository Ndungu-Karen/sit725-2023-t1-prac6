// Example data (replace with your database integration)
let projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' }
  ];
  
  // Controller methods
  const getAllProjects = (req, res) => {
    res.json(projects);
  };
  
  const getProjectById = (req, res) => {
    const id = parseInt(req.params.id);
    const project = projects.find(project => project.id === id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  };
  
  const createProject = (req, res) => {
    const { name } = req.body;
    const id = projects.length + 1;
    const newProject = { id, name };
    projects.push(newProject);
    res.status(201).json(newProject);
  };
  
  const updateProject = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
      projects[projectIndex].name = name;
      res.json(projects[projectIndex]);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  };
  
  const deleteProject = (req, res) => {
    const id = parseInt(req.params.id);
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
      const deletedProject = projects.splice(projectIndex, 1);
      res.json(deletedProject[0]);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  };
  
  module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
  };
  