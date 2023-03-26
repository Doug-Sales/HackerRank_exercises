function twoArrays(k, A, B) {
    const valueA = [...A].sort((a, b) => a - b).reverse(),
        valueB = [...B].sort((a, b) => a - b),
        arrLength = Math.round(valueA.length / 2)

    for (let i = 0, j = -1; i < arrLength ; i++ , j--) {
        const compare = valueA.at(i) + valueB.at(i);
        const compareEnd = valueA.at(j) + valueB.at(j);

        if (compare && compareEnd < k) {
            return 'NO'
        }
    }
    return 'YES'
}
//https://www.hackerrank.com/challenges/two-arrays
