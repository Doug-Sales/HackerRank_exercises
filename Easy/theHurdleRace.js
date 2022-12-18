function hurdleRace(k, height) {
    let countDoses = 0;
    const hasToIncrease = value => {
        let compareAmounts = (value - k);           
        if ((value - k) >= 2) {
            countDoses = countDoses > compareAmounts ? countDoses : compareAmounts;            
        }
    };
    
    height.forEach(hasToIncrease);

    return countDoses
}

//https://www.hackerrank.com/challenges/the-hurdle-race/problem