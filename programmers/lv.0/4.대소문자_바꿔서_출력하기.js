const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    const arr = str.split('');
    const newArr = arr.map((s) => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase());

    console.log(newArr.join(''))
});