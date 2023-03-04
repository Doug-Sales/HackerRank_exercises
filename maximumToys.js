function maximumToys(prices, k) {
    let sumToys = 0,
        counter = 0;
    const table = [...prices].sort((a, b) => a - b)

    for (let prices of table) {
        sumToys += prices

        if (sumToys >= k) {
            return counter
        }
        counter++
    }
}
//https://www.hackerrank.com/challenges/mark-and-toys
