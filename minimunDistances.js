function minimumDistances(a) {
    let arr = [],
        answer = 0;

    for (let number of a) {
        arr.push(a.lastIndexOf(number) - a.indexOf(number))
    }
    
    answer = arr.sort((a, b) => a - b).filter(value => value > 0)

    return answer[0] || -1;
}
//https://www.hackerrank.com/challenges/minimum-distances/problem