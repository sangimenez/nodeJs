process.on('unhandledRejection', (err, p) => {
    console.log(`Custom unhandleRejection ${err}`)
})

process.on('uncaughtException', (err) => {
    console.log(`Custom uncaughtException ${err}`)
})

//Promise(resolve => JSON.pare({ color: 'blue' }))
//test()
throw 'mi error'