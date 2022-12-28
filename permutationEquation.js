function permutationEquation(p) {
    let inputLength = p.length + 1,
        swapArr = [],
        answerArr = [];

    for (let i = 1; i < inputLength; i++) {
        swapArr.push(p.indexOf(i) + 1)
        answerArr.push(p.indexOf(swapArr[i - 1]) + 1)
    }
    return answerArr;
}
//https://www.hackerrank.com/challenges/permutation-equation/problem
