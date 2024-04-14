const express = require("express");
const app = express();
const request = require("request");

// Define routes
app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req, res, next) {
    var firstNumber = parseInt(req.params.firstNumber);
    var secondNumber = parseInt(req.params.secondNumber);
    var result = firstNumber + secondNumber || null;

    if (result == null) {
        res.status(400).json({ result: result, statusCode: 400 });
    } else {
        res.status(200).json({ result: result, statusCode: 200 });
    }
});

// Start server
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server; // Export server for testing purposes
