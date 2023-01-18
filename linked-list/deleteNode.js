function deleteNode(llist, position) {
    let current = llist,
        previous;

    if (position === 0) {
        llist = current.next;
        return llist;
    }
    for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
    }
    previous.next = current.next

    return llist;
}
//https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list
//Big-O: O(n)