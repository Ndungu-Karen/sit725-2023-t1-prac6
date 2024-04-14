const expect = require("chai").expect;
const request = require("request");

describe("Add Two Numbers API", function() {
    const baseUrl = "http://localhost:8080"; // Assuming your server is running locally on port 8080

    it("returns status 200 and correct result when adding two numbers", function(done) {
        const firstNumber = 3;
        const secondNumber = 5;
        const expectedSum = 8;

        request(`${baseUrl}/addTwoNumbers/${firstNumber}/${secondNumber}`, function(error, response, body) {
            const responseBody = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(responseBody.result).to.equal(expectedSum);
            done();
        });
    });

    it("returns status 400 when one or both numbers are not provided", function(done) {
        request(`${baseUrl}/addTwoNumbers/3`, function(error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });

    it("returns status 400 when non-numeric inputs are provided", function(done) {
        request(`${baseUrl}/addTwoNumbers/a/b`, function(error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
});
