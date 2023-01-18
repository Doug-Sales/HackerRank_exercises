function reversePrint(llist) {
    let current = llist,
        result = null;

    if (!current) {
        return;
    }

    while (current) {
        let newNode = new SinglyLinkedListNode()
        newNode.data = current.data
        newNode.next = result
        result = newNode
        current = current.next;
    }
    while (result) {
        console.log(result.data)
        result = result.next
    }
}
//https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse