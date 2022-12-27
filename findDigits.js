function findDigits(n) {
    let counter = 0,
        moduleValue = String(n).split('');


    for (let number of moduleValue) {
        (n % Number(number) === 0) ? counter++ : null;
    }

    return counter;
}
//https://www.hackerrank.com/challenges/find-digits/problem