function viralAdvertising(n) {

    const viralRecursive = (n, shares = 5, accumulative = 0) => {
        if (n === 0) {
            return accumulative;
        }
        let likes = Math.floor(shares / 2)
        shares = likes * 3
        accumulative += likes
        return viralRecursive(n - 1, shares, accumulative)
    }


    return viralRecursive(n)
}
//https://www.hackerrank.com/challenges/strange-advertising
//Big-O: espacial O(1), temporal O(n)