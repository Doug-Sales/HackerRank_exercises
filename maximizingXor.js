function maximizingXor(l, r) {
    const [left, right] = [l, r];
    let maxValue = 0;


    for (let i = left; i <= right; i++) {
        for (let j = left; j <= right; j++) {
            const xorResult = (i ^ j);
            
            maxValue = xorResult > maxValue ?
                xorResult :
                maxValue;
        }
    }
    return maxValue;
}
//https://www.hackerrank.com/challenges/maximizing-xor