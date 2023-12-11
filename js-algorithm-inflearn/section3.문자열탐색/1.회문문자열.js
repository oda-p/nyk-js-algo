const getAnswer = (string) => {
    const lowerCase = string.toLowerCase();
    const reverse = lowerCase.split('').reverse().join('');
    return lowerCase === reverse ? 'YES' : 'NO'
}

console.log(getAnswer('gooG'));