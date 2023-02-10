function marsExploration(s) {
    let string = 'SOS',
        answer = 0;
    
    for(let i=0;i<s.length;i++){
        if(s[i] !== string[i % 3]){
            answer++
        }
    }
    return answer;
}
//https://www.hackerrank.com/challenges/mars-exploration
//Big-O: O(n)