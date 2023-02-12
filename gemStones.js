function gemstones(arr) {
    const firstStoneElements = new Set(arr[0]),
        [, ...elements] = arr;

    for (let stone of elements) {
        const elemStone = new Set(stone);

        firstStoneElements.forEach(eachElements => {
            if (!elemStone.has(eachElements)) {
                firstStoneElements.delete(eachElements)
            }
        })
    }

    return firstStoneElements.size
}
//https://www.hackerrank.com/challenges/gem-stones
//Big-O: O(n^2) :|
