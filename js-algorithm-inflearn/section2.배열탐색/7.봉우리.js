const getAnswer = (list) => {
    const x = [-1, 0, 1, 0];
    const y = [0, -1, 0, 1];
    const around = (num, i, j) => list?.[i + x[num]]?.[j + y[num]] || 0

    let answer = 0;

    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length; j++) {
            const main = list[i][j];
            const top = around(0, i, j);
            const right = around(1, i, j);
            const bottom = around(2, i, j);
            const left = around(3, i, j);

            if(main > top && main > right && main > bottom && main > left) {
                answer++;
            }
        }
    }

    return answer;
}

console.log(getAnswer([
    [5,3,7,2,3],
    [3,7,1,6,1],
    [7,2,5,3,4],
    [4,3,6,4,1],
    [8,7,3,5,2]
]))