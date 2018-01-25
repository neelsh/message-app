const myApp = require("../server.js");
const request = require("supertest")(myApp);
const should = require("should");

describe('Unit test', function() {

  it('should return the content of the home page', function(done) {
    request
      .get('/')
      .expect('Hello Earthlings!\n', done);
  });

  it('returns correct headers', function(done) {
    request
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8', done);
  });

  it('returns error code if path is incorrect', function(done) {
    request
      .get('/some-error-route')
      .expect(404)
      .end(function(err, res) {
        res.status.should.equal(404)
        done();
      })
  });

  it('sends a POST to the server', function(done) {
    request
      .post('/send')
      .send({test: 'hello'})
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        res.error.should.equal(false);
        done();
      });
  });
});
