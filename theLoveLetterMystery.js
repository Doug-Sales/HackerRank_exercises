function theLoveLetterMystery(s) {
    const mid = Math.floor(s.length / 2);
    const iterations = s.length % 2 === 0 ? mid : mid + 1;
    let sumOperations = 0;

    for (let i = 0, j = s.length - 1; i < iterations; i++, j--) {
        const charCodeI = s.charCodeAt(i);
        const charCodeJ = s.charCodeAt(j);
        sumOperations += Math.abs(charCodeI - charCodeJ);
    }

    return sumOperations;
}
//https://www.hackerrank.com/challenges/the-love-letter-mystery