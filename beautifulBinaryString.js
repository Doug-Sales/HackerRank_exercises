function beautifulBinaryString(b) {
    return [...b.matchAll(/010/g)].length;   

}
//https://www.hackerrank.com/challenges/beautiful-binary-string
// Big-O: temporal O(n), espacial O(1);