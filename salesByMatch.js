function sockMerchant(n, ar) {
    let counter = 0,
        filter = new Set();

    for (let item of ar) {
        if (filter.has(item)) {
            counter++
            filter.delete(item);
        } else {
            filter.add(item);
        }

    }

    return counter;
}

//https://www.hackerrank.com/challenges/sock-merchant/problem