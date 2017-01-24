'use strict';

const express = require('express');
const Router = express.Router;
const router = new Router();

router.use('/*', (req, res) => {
	res.sendFile('ROOT/dist/index.html');
});

module.exports = router;
