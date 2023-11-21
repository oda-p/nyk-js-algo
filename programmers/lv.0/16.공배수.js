const solution = (number, n, m) => {
    if(number % n) return 0;
    if(number % m) return 0;
    return 1;
}