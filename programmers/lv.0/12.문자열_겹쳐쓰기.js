function solution(my_string, overwrite_string, s) {
    var answer = '';

    const left = my_string.slice(0, s);
    const right = my_string.slice(s + overwrite_string.length, my_string.length);

    answer = left + overwrite_string + right;

    return answer;
}