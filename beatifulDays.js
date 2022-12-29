function beautifulDays(i, j, k) {
    let counter = 0,
        countAnswer = 0,
        currentDays = [],
        reverseDays = [];


    for (let day = i; day <= j; day++) {

        currentDays[counter] = day;
        reverseDays[counter] = Number([day].toString().split('').reverse().join(''))

        if ((Math.abs(currentDays[counter] - reverseDays[counter]) % k === 0)) {
            countAnswer++;
        }

        counter++;
    }

    return countAnswer
}
//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem