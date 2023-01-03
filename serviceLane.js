function serviceLane(cases, width) {
    let valuesOfIndex = [],
        j = 0;

    for (let number of cases) {
        valuesOfIndex[j] = [...width].slice(number[0], number[1] + 1).sort()[0]
        j++;   
    }
    return valuesOfIndex;
}
//https://www.hackerrank.com/challenges/service-lane/problem?

//PS: modify the signature in function main: (n, cases) to (width, cases). See the "discussions" for help.