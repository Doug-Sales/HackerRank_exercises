function insertNodeAtTail(head, data) {
    let newList = new SinglyLinkedListNode()
    
    if (head === null) {
        head = new SinglyLinkedListNode(data);
        return head;
    }
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = new SinglyLinkedListNode(data);
    
    return head;
}
//https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list
//Big-O: espacial O(1), temporal O(n)