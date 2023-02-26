function theLoveLetterMystery(s) {
    const word = s,
        codeLetter = word.split('').map(letter => letter.charCodeAt()),
        mid = word.length % 2 === 0 ? word.length / 2 : Math.round(word.length / 2);
    let sumOperations = 0;

    if (word.length % 2 !== 0) {
        for (let i = 0, j = -1; i < mid - 1; i++ , j--) {
            sumOperations += Math.abs(codeLetter.at(i) - codeLetter.at(j))
        }
        return sumOperations;
    }

    for (let i = 0, j = -1; i < mid; i++ , j--) {
        sumOperations += Math.abs(codeLetter.at(i) - codeLetter.at(j))
    }
    return sumOperations
}
//https://www.hackerrank.com/challenges/the-love-letter-mystery