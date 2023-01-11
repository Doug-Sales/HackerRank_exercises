function howManyGames(p, d, m, s) {
    let budget = s,
        minimumCostGame = m,
        discount = d,
        initialPrice = p,
        currentPrice = 0,
        purchasedGamesCounter = 0;

    while (currentPrice + initialPrice <= budget) {
        currentPrice += initialPrice
        initialPrice -= discount

        if (initialPrice < minimumCostGame) {
            initialPrice = minimumCostGame
        }
        
        purchasedGamesCounter++
    }
    return purchasedGamesCounter;
}
//https://www.hackerrank.com/challenges/halloween-sale
//Big-O: O(n)