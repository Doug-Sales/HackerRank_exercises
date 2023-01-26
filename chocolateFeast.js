function chocolateFeast(n, c, m) {
    let money = n,
        priceChocolate = c,
        packages = m,
        chocolates = 0;

    chocolates += Math.floor(money / priceChocolate);
    let wrappers = chocolates;

    while (wrappers >= packages) {
        const newChocolate = Math.floor(wrappers / packages);
        chocolates += newChocolate;
        wrappers = (wrappers % packages) + newChocolate;
    }
    return chocolates;
}
//https://www.hackerrank.com/challenges/chocolate-feast