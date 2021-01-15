console.log('Module.js')

async function start() {
   await Promice.resolve( 'async working')
}

start().then(console.log)