function lonelyinteger(a) {
    const setValues = Array.from(new Set(a)),
        arrayInput = [...a];
    let answer = 0;

    for (let currentNumber of setValues) {
        if ((arrayInput.indexOf(currentNumber) === arrayInput.lastIndexOf(currentNumber))) {
            answer = currentNumber;
        }
    }
    return answer;
}
//https://www.hackerrank.com/challenges/lonely-integer