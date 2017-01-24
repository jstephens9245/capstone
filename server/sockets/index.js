'use strict';

const socketio = require('socket.io');

module.exports = function sockets(server) {
	const io = socketio(server);

	io.on('connection', (socket) => {
		console.log(`Connected to ${socket.id}`);
	});

	return io;
};
