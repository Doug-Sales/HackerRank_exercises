function runningTime(arr) {
    let swapCounter = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapCounter++
            }
        }
    }
    return swapCounter
}
//https://www.hackerrank.com/challenges/runningtime/
// Big-O: O(n²)