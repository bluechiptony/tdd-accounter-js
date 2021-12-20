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
  const postValidUser = () => {
    return request(app).post('/api/v1/users').send({
      userName: 'user1',
      email: 'user@mail.com',
      password: 'Us3r0ne',
    });
  };

  it('returns 200 if sign up is valid', (done) => {
    postValidUser().then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('should Return success message when sign up request', (done) => {
    postValidUser().then((response) => {
      expect(response.body.message).toBe('Thanks for signing up. You can now enjoy stuff');
      done();
    });
  });
  it('Should save  user to database', (done) => {
    postValidUser().then(() => {
      User.findAll().then((userList) => {
        expect(userList.length).toBe(1);
        expect(userList[0].userName).toBe('user1');
        done();
      });
    });
  });
  it('Should saves the user name and email address', (done) => {
    postValidUser().then(() => {
      User.findAll().then((userList) => {
        const savedUser = userList[0];
        expect(savedUser.userName).toBe('user1');
        expect(savedUser.email).toBe('user@mail.com');
        done();
      });
    });
  });
  it('Should not save clear password in database', (done) => {
    postValidUser().then(() => {
      User.findAll().then((userList) => {
        const savedUser = userList[0];
        expect(savedUser.password).not.toBe('Us3r0ne');
        done();
      });
    });
  });
});
