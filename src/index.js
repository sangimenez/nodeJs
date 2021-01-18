//console.log('hola mundo')
//console.log('Sandra')
// Muestra el número total de lineas, y el número de palabras por linea

const readline = require('readline');
const fs = require('fs')

const file = process.argv[2]
let lines = 0

console.log(`Fichero selecionado: ${file}\n`)

// Emite el evento 'line' cuando lee una linea
const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
})

rl.on('line', (line) => {
    ++lines
    console.log(`Número de caracteres por linea: ${line.length}`)
})

rl.on('close', () => {
    console.log(`\nNúmero total de lineas: ${lines}`)
})