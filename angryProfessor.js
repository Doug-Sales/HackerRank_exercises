function angryProfessor(k, a) {
    let answer = (a.filter(value => value <= 0).length >= k) ? 'NO' : 'YES';

    return answer;
}
//https://www.hackerrank.com/challenges/angry-professor/problem