//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = require('chai').should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('/', () => {
  it('it should return a 200 OK response', (done) => {
    chai
      .request(server)
      .get('/')
      .end((_, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('it should return a hello world body response', (done) => {
    chai
      .request(server)
      .get('/')
      .end((_, res) => {
        expect(res.text).to.eql('Hello world');
        done();
      });
  });
});
