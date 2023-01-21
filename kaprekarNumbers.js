function kaprekarNumbers(p, q) {
    let answer = []

    function kaprekar(number) {
        let kap = number * number;
        const rightSide = Number(kap.toString().substring((kap.toString().length / 2)))
        const leftSide = Number(kap.toString().substring(0, (kap.toString().length / 2)))
        kap = leftSide + rightSide
        return kap === number ? true : false;
    }
    for (p; p <= q; p++) {
        if (kaprekar(p)) {
            answer.push(p)
        }
    }
    console.log(answer.join(' ') || 'INVALID RANGE')
}
//https://www.hackerrank.com/challenges/kaprekar-numbers
//Big-O: O(n)