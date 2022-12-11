function diagonalDifference(arr) {
    let leftToRight = 0,
        rightToLeft = 0,
        j = arr.length - 1;

    for (let i = 0; i < arr.length; j-- , i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][j];

    }
       
    return Math.abs(leftToRight - rightToLeft);
}


//https://www.hackerrank.com/challenges/diagonal-difference/problem