const fs = require('fs');
const path = require('path');

const models = {};

// Read all model files in the directory, excluding index.js
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js' && file.endsWith('.js'))
  .forEach(file => {
    const modelName = file.replace('.js', '');
    models[modelName] = require(path.join(__dirname, file));
  });

module.exports = models;
