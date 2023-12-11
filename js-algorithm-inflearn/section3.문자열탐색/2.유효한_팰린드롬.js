const getAnswer = (str) => {
    const raw = str.toLowerCase().replace(/[^a-z]/g, '');
    const reverse = raw.split('').reverse().join('');

    return raw === reverse ? 'YES' : 'NO'
}

console.log(getAnswer("found7, time: study; Yduts; emit, 7Dnuof"));