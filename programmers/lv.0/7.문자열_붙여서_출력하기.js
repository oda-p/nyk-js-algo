const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1+str2)

    // 이렇게 하면 더 간단하게 해결할 수 있다.
    // 주어진것 말고 스스로 생각해보는 습관 기르기.
    const strArr = line.split(' ')
    console.log(strArr.join(''))
});