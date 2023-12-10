const getMaxSum = (arr) => {
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    let sum2;

    // 가로 세로 합
    let sum1 = sum2 = 0;
    for(let i=0; i<n; i++){
        sum1=sum2=0;
        for(let j=0; j<n; j++){
            sum1+=arr[i][j];
            sum2+=arr[j][i];
        }
        answer=Math.max(answer, sum1, sum2);
    }

    // 대각선 합
    sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1+=arr[i][i];
        sum2+=arr[i][n-i-1];
    }
    answer=Math.max(answer, sum1, sum2);
    return answer;
}

console.log(getMaxSum(
[[10,13,10,12,15],
        [12,39,30,23,11],
        [11,25,50,53,15],
        [19,27,29,37,27],
        [19,13,30,13,19]]
));