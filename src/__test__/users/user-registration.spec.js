const request = require('supertest');

const app = require('../../../app');
const User = require('../../model/user');
const sequelize = require('../../config/database');

beforeAll(() => {
  return sequelize.sync();
});

beforeEach(() => {
  return User.destroy({ truncate: true });
});

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
  });
  it('Should save provided user to database', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({
        userName: 'user1',
        email: 'user@mail.com',
        password: 'Us3r0ne',
      })
      .then(() => {
        User.findAll().then((userList) => {
          expect(userList.length).toBe(1);
        });
        done();
      });
  });
});
