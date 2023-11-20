function solution(a, b) {
    const sum = Number(`${a}${b}`);
    const double = a * b * 2;

    if(sum === double) {
        return sum;
    }
    return sum > double ? sum : double ;
}