const express = require('express');
const app = express();

// Import routes
const projectRoutes = require('./routes/projectRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the SIT725 project!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
