function alternatingCharacters(s) {
    let string = 0,
        counterDelete = 0;

    for (const letter of s) {
        if (s[string] === s[string + 1]) {
            counterDelete++
        }
        string++
    }
    return counterDelete;
}
//https://www.hackerrank.com/challenges/alternating-characters