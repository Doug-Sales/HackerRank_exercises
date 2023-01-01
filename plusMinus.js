function plusMinus(arr) {
    let positive = 0,
        negative = 0,
        zero = 0;
    const sizeArr = arr.length

    arr.forEach(valor => {
        (valor > 0) ? positive += 1 : (valor < 0) ? negative += 1 : (valor === 0) ? zero += 1 : 0;
    })

    negative = (negative / sizeArr).toFixed(6)
    positive = (positive / sizeArr).toFixed(6)
    zero = (zero / sizeArr).toFixed(6)

    const result = [positive, negative, zero];

    result.forEach(resultado => {
        console.log(resultado)
    })

}
//https://www.hackerrank.com/challenges/plus-minus/problem