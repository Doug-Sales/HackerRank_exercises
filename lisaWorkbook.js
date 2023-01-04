function workbook(n, k, arr) {

    let countSpecial = 0,
        page = 1;

    for (let exercise of arr) {
        for (let j = 1; j <= exercise; j++) {

            if (j === page) {
                countSpecial++;
            }

            if (j % k === 0 || j === exercise) {
                page++;
            }
        }
    }

    return countSpecial;
}
//https://www.hackerrank.com/challenges/lisa-workbook/problem