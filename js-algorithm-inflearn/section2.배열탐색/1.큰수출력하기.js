const fc = (list) => {
    let index = 0;

    return list.reduce((sum, i) => {
        const prev = list[index-1];
        const current = list[index];
        if(index === 0 || current > prev) {
            sum.push(i);
        }
        index += 1;
        return sum;
    }, []);
}

console.log(fc([7,3,9,5,6,12]));