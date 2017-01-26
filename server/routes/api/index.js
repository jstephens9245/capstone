'use strict';

const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
<<<<<<< HEAD
  .use('/boards', require('./board'))
  .use('/user', require('./user'));
=======
  .use('/board', require('./board'))
  .use('/user', require('./user'))
  .use('/auth', require('./auth'));
>>>>>>> master

// Send along any errors
api.use((err, req, res) => {
  console.error('error:', err.stack);
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
