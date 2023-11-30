const fc = (list) => {
    let index = 0;

    const res = list.reduce((sum, i) => {
        const prev = list[index-1];
        const current = list[index];
        if(current > prev) {
            sum.push(i);
        }
        index += 1;
        return sum;
    }, []);

    return res.length;
}

console.log(fc([130, 135, 148, 140, 145, 150 ,150 ,153]));