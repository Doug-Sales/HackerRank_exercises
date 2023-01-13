function funnyString(s) {
    let isFunny = true;
    const array = s.split('').reverse().join('');

    for (let i = 0; i < s.length - 1; i++) {
        const equalArray = Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));
        const reverseArray = Math.abs(array.charCodeAt(i + 1) - array.charCodeAt(i));

        if (equalArray !== reverseArray) {
            isFunny = false;
            break;
        }
    }

    return isFunny ? 'Funny' : 'Not Funny';

}
//https://www.hackerrank.com/challenges/funny-string/problem
//Big-O: O(n)