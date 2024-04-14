const mongoose = require('mongoose');

// MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://Ndungu:Ndungu@cluster0.mhjgspt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;