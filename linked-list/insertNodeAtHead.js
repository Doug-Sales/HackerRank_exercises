function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data);

    newNode.next = head;
    head = newNode;

    return head;
}
//https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list
// Big-O: O(n)