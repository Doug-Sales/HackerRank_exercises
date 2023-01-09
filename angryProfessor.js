function angryProfessor(k, a) {
        
    return (a.filter(value => value <= 0).length >= k) ? 'NO' : 'YES';
}
//https://www.hackerrank.com/challenges/angry-professor/problem