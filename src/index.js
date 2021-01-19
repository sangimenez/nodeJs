const http = require('http')

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        response.write('<h1>Metodo valido hello</h1>')
        return response.end()
    }

    response.write('<h1>Esta intentando acceder con un metodo no valido</h1>')
    return response.end()
})

server.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Error: ', err)
    }

    console.log('Server opened listen on http://localhost:8000')
})