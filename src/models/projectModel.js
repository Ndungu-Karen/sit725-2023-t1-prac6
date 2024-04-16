// Example data (replace with your database integration)
let projects = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
    { id: 3, name: 'Project C' }
  ];
  
  // Model methods
  const getAllProjects = () => {
    return projects;
  };
  
  const getProjectById = (id) => {
    return projects.find(project => project.id === id);
  };
  
  const createProject = (name) => {
    const id = projects.length + 1;
    const newProject = { id, name };
    projects.push(newProject);
    return newProject;
  };
  
  const updateProject = (id, newName) => {
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
      projects[projectIndex].name = newName;
      return projects[projectIndex];
    } else {
      return null; // Indicate project not found
    }
  };
  
  const deleteProject = (id) => {
    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex !== -1) {
      const deletedProject = projects.splice(projectIndex, 1);
      return deletedProject[0];
    } else {
      return null; // Indicate project not found
    }
  };
  
  module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
  };
  