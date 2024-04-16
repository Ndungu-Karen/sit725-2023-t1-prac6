// Dynamically import Chai using CommonJS syntax
const chaiPromise = import('chai');
chaiPromise.then(chai => {
  const { expect } = chai;

  // Import other dependencies
  const request = require('request');

  // Rest of your test code remains the same
  describe("API Tests", function() {
    it("should return status 200 for GET request to /api/projects", function(done) {
      request("http://localhost:3000/api/projects", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("should return status 404 for GET request to a non-existing route", function(done) {
      request("http://localhost:3000/non-existing-route", function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    // Add more test cases as needed
  });
}).catch(error => {
  console.error("Error loading Chai:", error);
});
