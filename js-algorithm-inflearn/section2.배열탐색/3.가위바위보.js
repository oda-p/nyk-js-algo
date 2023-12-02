const fc = (A,B) => {
    const res = A.map((a, index) => {
        const b = B[index];
        if(a === b) {
            return 'D'
        }
        if(a === 1) {
            return b === 3 ? 'A' : 'B';
        }
        if(a === 2) {
            return b === 1 ? 'A' : 'B';
        }
        if(a === 3) {
            return b === 2 ? 'A' : 'B';
        }
    });

    res.forEach((i) => console.log(i));
}

console.log(fc([2,3,3,1,3],[1,1,2,2,3]));