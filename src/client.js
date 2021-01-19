const net = require('net')

const socket = net.Socket()
socket.connect(3000, 'localhost')

socket.write('Hola?')

socket.on('data', data => console.log(data.toString()))