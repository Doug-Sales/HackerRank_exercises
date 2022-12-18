function migratoryBirds(arr) {
    let migratory = Array.from(arr).sort((a, b) => a - b),
        valueMax = 0,
        currentValue = 0,
        value = 0;


    for (let i = 1; i < 6; i++) {
        value = i;
        const howManyValueInArray = (migratory.lastIndexOf(value) - migratory.indexOf(value));

        if (howManyValueInArray + 1 > valueMax) {
            valueMax = howManyValueInArray + 1;
            currentValue = i;
        }
    }

    return currentValue;

}
//https://www.hackerrank.com/challenges/migratory-birds/problem
