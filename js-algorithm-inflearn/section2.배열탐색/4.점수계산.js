const getScore = (gradings) => {
    let points = 0;

    return gradings.map((g) => {
        if(!!g) {
            points++;
        } else {
            points = 0;
        }
        return points
    })
}

console.log(getScore([1,0,1,1,1,0,0,1,1,0]));