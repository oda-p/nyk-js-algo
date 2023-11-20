const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const left = line % 2;
    let right = 'odd';

    if(left === 0) {
        right = 'even';
    }

    console.log(`${line} is ${right}`);
});