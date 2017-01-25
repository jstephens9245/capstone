'use strict';

const api = module.exports = require('express').Router();

api
	.get('/heartbeat', (req, res) => res.send({ok: true}))
	.use('/board', require('./board'));

// Send along any errors
api.use((err, req, res) => {
	console.error('error:', err.stack);
	res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());