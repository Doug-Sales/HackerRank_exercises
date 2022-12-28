function printLinkedList(head) {

    if(!head){
        return
    }
    let current = head;
    
    while(current){
        console.log(current.data);
        current = current.next;
    }
}
//https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem
