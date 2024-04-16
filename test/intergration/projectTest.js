const expect = require("chai").expect;
const request = require("request");

describe("Project API Tests", function() {
  it("should create a new project and return status 201", function(done) {
    const newProject = { name: "New Project" };
    request.post({
      url: "http://localhost:3000/api/projects",
      json: true,
      body: newProject
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(201);
      expect(body).to.have.property("id");
      expect(body.name).to.equal(newProject.name);
      done();
    });
  });

  it("should get all projects and return status 200", function(done) {
    request("http://localhost:3000/api/projects", function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.a("string");
      done();
    });
  });

  // Add more test cases as needed
});
