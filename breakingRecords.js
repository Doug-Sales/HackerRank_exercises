function breakingRecords(scores) {
    let bestRecord = scores[0],
        counterBest = 0,
        worstRecord = scores[0],
        counterWorst = 0;

    scores.forEach((value) => {
        if (value > bestRecord) {
            bestRecord = value;
            counterBest += 1;
            return;
        }
        if (value < worstRecord) {
            worstRecord = value;
            counterWorst += 1;
            return;
        }
    })
    return [counterBest, counterWorst]
}
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records