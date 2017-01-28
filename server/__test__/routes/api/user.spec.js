const { expect } = require('chai');
const request = require('supertest');
const express = require('express');
const {User, db} = require('ROOT/server/models');
const router = require('ROOT/server/routes/api/user');

const bodyParser = require('body-parser');
const app = express();
app.use(router);
app.use(bodyParser.json());

describe('Users Route:', () => {

  let userNum;

  it ('should GET all users', () => {
    User.findAll()
      .then(users => {
        userNum = users.length;
      })
      .then(() => {
        return request(app)
          .get('/')
          .expect(200)
          .expect(res => {
            expect(res.body.length).to.equal(userNum);
          });
      });
  });

  // it ('should CREATE a user', () => {
  //   const user = {
  //     first_name: 'A',
  //     last_name : 'Y',
  //     email     : 'a@a.com',
  //     password  : 12345 };
  //   return request(app)
  //     .post('/')
  //     .send(user)
  //     .expect(200);
  // });
});

