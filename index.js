var date = new Date();
var currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

var colorCyan = '\033[36m';
var colorGreen = '\033[32m';
var colorYellow = '\033[33m';
var colorRed = '\033[31m';
var colorReset = '\033[0m';

const debug = (text) => {
    console.log(`[${currentTime}] ${colorCyan}[DEBUG]${colorReset}: ${text}`);
};

const info = (text) => {
    console.log(`[${currentTime}] ${colorGreen}[INFO]${colorReset}: ${text}`);
};

const warn = (text) => {
    console.log(`[${currentTime}] ${colorYellow}[WARN]${colorReset}: ${text}`);
};

const error = (text) => {
    console.log(`[${currentTime}] ${colorRed}[ERROR]${colorReset}: ${text}`);
};

module.exports = {
    debug,
    info,
    warn,
    error
}

/*
    Copyright 2022 | ProxyRouter.net
*/