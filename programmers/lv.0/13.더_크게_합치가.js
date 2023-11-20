function solution(a, b) {
    const prev = Number(`${a}${b}`);
    const next = Number(`${b}${a}`);

    return prev < next ? next : prev
}