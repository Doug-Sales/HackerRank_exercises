function strangeCounter(t) {
    let value = 3;
    
    while (value > 0) {
        if (t <= value) {
            return value + 1 - t;
        }
        t -= value;
        value *= 2;
    }

}
//https://www.hackerrank.com/challenges/strange-code