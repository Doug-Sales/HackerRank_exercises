function marcsCakewalk(calorie) {
    let minimumMiles = 0,
        counter = 0;
    [...calorie].sort((a, b) => b - a).forEach((value) => {
        minimumMiles += ((2 ** counter) * value)
        counter++
    })
    return minimumMiles;
}
//https://www.hackerrank.com/challenges/marcs-cakewalk/