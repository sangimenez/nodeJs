//creamos servidor (socket)
const net = require('net')

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data.toString())
        socket.write('Mundo?')
    })
})

server.on('error', () => console.log('se ha producido un error'))

server.on('connect', () => console.log('socket connected'))

server.listen({
        host: 'localhost',
        port: 3000,
        exclusive: true
    },
    () => console.log(`Servidor socket abierto en ${server.address()}`)
)