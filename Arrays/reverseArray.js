function reverseArray(a) {
    let newA = [];

    for (let i = a.length-1, j = 0; i >= 0; i--,j++ ) {
        newA[j] = a[i]
    }

    return newA
    // return a.reverse() //too easy;
}
//https://www.hackerrank.com/challenges/arrays-ds
//Big-O: O(n)