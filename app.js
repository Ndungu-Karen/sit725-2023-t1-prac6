const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use('/api', routes); // Mount routes under /api prefix

// Define a simple route for the root URL
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
=======
// Define a route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
>>>>>>> parent of 1f2500c (tests)
});

// Define a route for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
