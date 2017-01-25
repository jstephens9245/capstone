'use strict';

const Path = require('path');

const express = require('express');
const Router = express.Router;
const router = new Router();

router.use('/api', require('ROOT/server/routes/api'));

router.use('/*', (req, res) => {
	res.sendFile(Path.resolve(__dirname, '../../dist/index.html'));
});

module.exports = router;
