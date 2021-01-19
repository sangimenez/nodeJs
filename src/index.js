const http = require('http')
const fs = require('fs')

const path = require('path')
const server = http.createServer((request, response) => {
    let filePath = request.url
    if (filePath === '/') {
        filePath = 'index.html'
    }
    filePath = `./src/${filePath}`

    const extname = path.extname(filePath)
    switch (extname) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.html':
            contentType = 'text/html'
            break;
    }
    response.writeHead(200, { 'Content-Type': `${contentType}; charset=UTF-8` })
    fs.readFile(filePath, (err, content) => {
        if (err) {
            return console.log(err)
        }
        response.write(content)
        response.end()
    })
})

server.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Error: ', err)
    }

    console.log('Server opened listen on http://localhost:8000')
})