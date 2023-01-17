function insertNodeAtPosition(llist, data, position) {
    let node = new SinglyLinkedListNode(data);

    if (position === 0) {
        node.next = llist;
        return node;
    }

    let current = llist;
    for (let i = 0; i < position - 1; i++) {
        current = current.next;
    }
    node.next = current.next;
    current.next = node;

    return llist;
}
//https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list
//Big-O: O(n)