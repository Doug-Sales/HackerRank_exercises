function reverse(llist) {
    let current = llist,
        result = null;

    if (!current) {
        return;
    }

    while (current) {
        let newNode = new SinglyLinkedListNode()
        newNode.data = current.data
        newNode.next = result

        result = newNode;
        current = current.next;
    }

    return result
}
//https://www.hackerrank.com/challenges/reverse-a-linked-list
//Big-O: O(n)