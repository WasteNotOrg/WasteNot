/* eslint-disable no-undef */
// END POINT TEST SUITE

const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  describe('/feed', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .post('/feed')
        .expect('Content-Type', /application\/json/)
        .expect(200));
    });
  });

  describe('/feed', () => {
    describe('POST', () => {
      it('responds with 200 status and an empty string', () => request(server)
        .post('/feed')
        .send({ donatorStatus: null })
        .expect('')
        .expect(200));
    });
  });

  describe('/landing', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .post('/feed')
        .expect('Content-Type', /application\/json/)
        .expect(200));
    });
  });
});
