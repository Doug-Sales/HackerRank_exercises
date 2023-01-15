function closestNumbers(arr) {
    arr.sort((a, b) => a - b);

    let minDifference = Number.MAX_VALUE,
        closestPairs = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let difference = Math.abs(arr[i] - arr[i + 1]);

        if (difference < minDifference) {
            minDifference = difference;

            closestPairs = [];

            closestPairs.push([arr[i], arr[i + 1]]);
        } else if (difference === minDifference) {
            closestPairs.push([arr[i], arr[i + 1]]);
        }
    }

    return closestPairs.flat();
}
//https://www.hackerrank.com/challenges/closest-numbers
//Big-O: O(n)