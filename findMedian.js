function findMedian(arr) {
    return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)]

}
//https://www.hackerrank.com/challenges/find-the-median
//Big-O: espacial O(n) temporal O(n log n)