function equalizeArray(arr) {
    const valueCounting = (acc, current) => {
        acc[current] ? acc[current] += 1 : acc[current] = 1;
        return acc;
    };

    let countValuesOfArray = arr.reduce(valueCounting, {}),
        swapOfValue = Object.entries(countValuesOfArray).sort((a, b) => { return b[1] - a[1] }),
        sumCountValuesOfArray = 0;


    for (let number in countValuesOfArray) {
        
        sumCountValuesOfArray += countValuesOfArray[number]
    }

    return sumCountValuesOfArray - swapOfValue[0][1];
}
//https://www.hackerrank.com/challenges/equality-in-a-array/problem