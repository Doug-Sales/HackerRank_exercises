function getMax(operations) {
    const stacks = [],
        stackQueries = [];

    for (let value of operations) {
        value === '2' ?
            stacks.pop() :
            value === '3' ?
                stackQueries.push(Math.max(...stacks)) :
                stacks.push(Number(value.slice(2)));
    }
    return stackQueries
}
//https://www.hackerrank.com/challenges/maximum-element
//Big-O: stacks O(1), Math.max: O(n)