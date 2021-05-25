const os = require('os')
const chalk = require('chalk')
const fs = require('fs')

let square = "\u2592"

function calculateRAM(mem) {
    let memInMB = ((mem/1024)/1024)
    return `${Math.floor(memInMB)} MiB`
}

function getUserInfo() {
    return `${chalk.rgb(222, 56, 43) (os.hostname())}${chalk.white("@")}${chalk.rgb(222, 56, 43) (os.userInfo().username)}`
}

function getSlice() {
    let slice = "-"
    for (let i = 0; i < (os.userInfo().username.length + os.hostname().length) ; i++) {
        slice += "-";
    }
    return slice
}

function getOSInfo() {
    return `${chalk.rgb(222, 56, 43) (`OS:`)} ${os.version()} ${os.release()} ${os.arch()}`
}

function getKernelInfo() {
    return `${chalk.rgb(222, 56, 43) (`Kernel:`)} ${os.platform()}-${os.release()}`
}

function getUptime() {
    let sec = Math.floor(os.uptime())
    let min = Math.floor(sec/60)
    let hour =Math.floor(min/60)
    hour = hour%60;
    min = min%60;
    sec = sec%60; 
    return `${chalk.rgb(222, 56, 43) (`Uptime:`)} ${hour}h ${min}m ${sec}s`
}

function getNodeVersion() {
    return `${chalk.rgb(222, 56, 43) ("Node:")} ${process.version}`
}

function getTerminalPath() {
    return `${chalk.rgb(222, 56, 43) ("Terminal: ")} ${process.title}`
}

function getCPUInfo() {
    let cpu = "Could not get any information"
    os.cpus().map(entry => { 
            cpu = entry.model
            return
    })
    return `${chalk.rgb(222, 56, 43) (`CPU:`)} ${cpu}`
}

function getRAMInfo() {
    return `${chalk.rgb(222, 56, 43) ("Memory:")} ${calculateRAM(os.freemem())} / ${calculateRAM(os.totalmem())}`
}

function getFirstLineSquares() {
    return `${chalk.rgb(0, 0, 0) (square + square)}${chalk.rgb(197, 15, 31) (square + square)}${chalk.rgb(19, 161, 14) (square + square)}${chalk.rgb(193, 156, 0) (square + square)}${chalk.rgb(0, 55, 218) (square + square)}${chalk.rgb(136, 23, 152) (square + square)}${chalk.rgb(58, 150, 221) (square + square)}${chalk.rgb(204, 204, 204) (square + square)}`
}

function getSecondLineSquares() {
    return `${chalk.rgb(118, 118, 118) (square + square)}${chalk.rgb(231, 72, 86) (square + square)}${chalk.rgb(22, 198, 12) (square + square)}${chalk.rgb(249, 241, 165) (square + square)}${chalk.rgb(59, 120, 255) (square + square)}${chalk.rgb(180, 0, 158) (square + square)}${chalk.rgb(97, 214, 214) (square + square)}${chalk.rgb(242, 242, 242) (square + square)}`
}

function nodeFetch() {
    return `

                         ${chalk.rgb(159, 214, 97)("....::::")}   ${getUserInfo()}
                 ${chalk.rgb(159, 214, 97)("....::::::::::::")}   ${getSlice()}
        ${chalk.rgb(254, 109, 75) ("....::::")} ${chalk.rgb(159,214,97) ("::::::::::::::::")}   ${getOSInfo()}
${chalk.rgb(254,109,75)("....::::::::::::")} ${chalk.rgb(159,214,97) ("::::::::::::::::")}   ${getKernelInfo()}
${chalk.rgb(254, 109, 75) ("::::::::::::::::")} ${chalk.rgb(159,214,97) ("::::::::::::::::")}   ${getUptime()}
${chalk.rgb(254, 109, 75) ("::::::::::::::::")} ${chalk.rgb(159,214,97) ("::::::::::::::::")}   ${getNodeVersion()}
${chalk.rgb(254, 109, 75) ("::::::::::::::::")} ${chalk.rgb(159,214,97) ("::::::::::::::::")}   ${getTerminalPath()}
${chalk.rgb(254, 109, 75) ("::::::::::::::::")} ${chalk.rgb(159,214,97) ("::::::::::::::::")}   ${getCPUInfo()}
${chalk.rgb(72, 192, 235) ("................")} ${chalk.rgb(255, 207, 71) ("................")}   ${getRAMInfo()}
${chalk.rgb(72, 192, 235) ("::::::::::::::::")} ${chalk.rgb(255,207,71) ("::::::::::::::::")}
${chalk.rgb(72, 192, 235) ("::::::::::::::::")} ${chalk.rgb(255,207,71) ("::::::::::::::::")}   ${getFirstLineSquares()}
${chalk.rgb(72, 192, 235) ("::::::::::::::::")} ${chalk.rgb(255,207,71) ("::::::::::::::::")}   ${getSecondLineSquares()}
${chalk.rgb(72, 192, 235) ("''''::::::::::::")} ${chalk.rgb(255,207,71) ("::::::::::::::::")}
        ${chalk.rgb(72, 192, 235) ("''''::::")} ${chalk.rgb(255,207,71) ("::::::::::::::::")}
                 ${chalk.rgb(255,207,71) ("''''::::::::::::")}
                         ${chalk.rgb(255,207,71) ("''''::::")}

`
}

console.log(nodeFetch())