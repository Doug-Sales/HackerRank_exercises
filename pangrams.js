function pangrams(s) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    const setPangram = new Set(s.toLowerCase().replace(/[^a-z]/g, ''));

    for (const letter of alphabet) {
        if (!setPangram.has(letter)) {
            return 'not pangram';
        }

    }
    return 'pangram'
}
//https://www.hackerrank.com/challenges/pangrams