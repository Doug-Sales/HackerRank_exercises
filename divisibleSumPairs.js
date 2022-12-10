function divisibleSumPairs(n, k, ar) {    
    let countPairs = 0;

    ar.forEach((value, index) => {
        for (let i = 0; i < n; i++) {
            if ((value + ar[i]) % k === 0 && i !== index) {
                countPairs++                
            }
        }
    })
    countPairs = countPairs / 2;

    return countPairs;
}

// Link = https://www.hackerrank.com/challenges/divisible-sum-pairs/problem