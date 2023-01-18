function CompareLists(llist1, llist2) {
    let current = llist1,
        current2 = llist2;
      
   
    while(current && current2){
        if(current.data !== current2.data){
            return 0
        }
        current = current.next
        current2 = current2.next
    }
    
    if (current || current2){
        return 0
    }
    return 1
}
//https://www.hackerrank.com/challenges/compare-two-linked-lists
//Big-O: O(n)
