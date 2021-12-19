const request = require('supertest');

const app = require('../../app');

describe('User registration tests', () => {
  it('returns 200 if sign up is valid', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        userName: 'user1',
        email: 'user@mail.com',
        password: 'Us3r0ne',
      })
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
    // .expect(200, done);
  });

  it('should Return success message when sign up request', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        userName: 'user1',
        email: 'user@mail.com',
        password: 'Us3r0ne',
      })
      .then((response) => {
        expect(response.body.message).toBe('Thanks for signing up. You can now enjoy stuff');
        done();
      });
    // .expect(200, done);
  });
});
