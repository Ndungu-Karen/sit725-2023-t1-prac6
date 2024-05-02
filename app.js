<<<<<<< HEAD
// Import required modules
const express = require("express");
const mongoose = require('mongoose');
const projectsRoute = require('./routes/projects'); // Import the projects route

// Create an Express application instance
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Serve static files from the public directory (if needed)
app.use(express.static(__dirname + '/public'));

// Define routes
app.use('/api/projects', projectsRoute); // Mount the projects route under /api/projects

=======
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api', routes); // Mount routes under /api prefix
>>>>>>> parent of 04b2d51 (Revert "mongoose database added")
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to your Express.js MVC app!');
});

<<<<<<< HEAD
// MongoDB connection
mongoose.connect('mongodb+srv://Ndungu:Ndungu@cluster0.mhjgspt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the port for the server to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("App listening on port: " + port);
});

// Export the Express app instance (if needed)
module.exports = app;
=======

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://Ndungu:Ndungu@cluster0.mhjgspt.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successfully connecting to MongoDB
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
>>>>>>> parent of 04b2d51 (Revert "mongoose database added")
