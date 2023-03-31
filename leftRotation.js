function rotateLeft(d, arr) {
    const newArr = [...arr]

    for (let i = 0; i < d; i++) {
        const firstValue = newArr.shift();
        newArr.push(firstValue);
    }

    return newArr;
}
//https://www.hackerrank.com/challenges/array-left-rotation