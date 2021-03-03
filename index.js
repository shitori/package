function infoStart(port, name) {
    console.log(`${name} listening at http://localhost:${port}`)
}

let osu = require('node-os-utils')
let cpu = osu.cpu
let mem = osu.mem
cpu.usage()
    .then(info => {
        console.log('CPU usage: ' + info + ' %')
    })
mem.used()
    .then(info => {
        console.log('RAM usage: ' + (info.usedMemMb * 100 / info.totalMemMb).toFixed(2) + ' %')
    })

module.exports = {infoStart}
