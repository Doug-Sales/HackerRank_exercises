function getMoneySpent(keyboards, drives, b) {
    let max = 0,
        compare = 0;

    keyboards.forEach(value => {
        for (let driveValue of drives) {
            if ((value + driveValue) <= b) {
                max = (value + driveValue) >= max ? (value + driveValue) : max;
                compare = 1
            }
        }
    })
    return compare === 0 ? -1 : max;

}

//https://www.hackerrank.com/challenges/electronics-shop/problem