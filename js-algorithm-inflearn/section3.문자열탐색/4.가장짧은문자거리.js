const solution = (str, t) => {
    const arr = str.split('');

    return arr.map((s, index) => {
        let minDistance = 0;
        if(s === t) {return minDistance;}
        else {
            const left = [...arr].slice(0, index);
            const right = [...arr].slice(index + 1, arr.length);
            const leftMin = [...left].reverse().findIndex((i) => i === t);
            const rightMin = [...right].findIndex((i) => i === t);

            if(minDistance > leftMin >= 0) {
                minDistance = leftMin;
            }
            if(minDistance > rightMin >= 0) {
                minDistance = rightMin;
            }

            if(s === 0) return rightMin;
            if(s === arr.length) return leftMin;
        }

        return minDistance;
    })
}

console.log(solution('teachermode', 'e'))