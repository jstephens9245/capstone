const {expect} = require('chai');
const request = require('supertest');
const express = require('express');
const {User, db} = require('ROOT/server/models');

const bodyParser = require('body-parser');
const app = require('ROOT/server');


describe('Users GET Route:', () => {
  let userNum;
  it('should GET all users', () => {
    return request(app)
      .get('/api/user')
      .expect(200)
      .expect(res => {
        User
          .findAll()
          .then(users => {
            expect(res.body.length)
              .to
              .equal(users.length);
          });
      });
  });
});


describe('Users POST Route:', () => {

  it('should CREATE a user', () => {
    const user = {
      first_name: 'Alvin',
      last_name : 'Yuen',
      email     : 'alvin@alvin.com',
      password  : '12345'
    };
    return request(app)
      .post('/api/user')
      .send(user)
      .expect(200)
      .expect(res => {
        expect(res.body.email)
          .to
          .be
          .equal('alvin@alvin.com');
      });
  });

  it('should not allow to CREATE user with the same email', () => {
    const user = {
      first_name: 'Alvin',
      last_name : 'Yuen',
      email     : 'alvin@alvin.com',
      password  : '12345'
    };
    return request(app)
      .post('/api/user')
      .send(user)
      .expect(409);
  });
});
