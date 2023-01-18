function getNode(llist, positionFromTail) {
    let valueList = [],
        current = llist;

    while (current) {
        valueList.push(current.data)
        current = current.next
    }

    return valueList[(valueList.length - 1) - positionFromTail];
}
//https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail
//Big-O: O(n) temporal e espacial