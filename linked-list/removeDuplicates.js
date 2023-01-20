function removeDuplicates(llist) {
    let current = llist,
        previous = llist,
        setValues = new Set();

    while (current) {
        if (setValues.has(current.data)) {
            previous.next = current.next
        } else {
            setValues.add(current.data)
            previous = current
        }
        current = current.next
    }
    return llist
}
//https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list
//Big-O: O(n)