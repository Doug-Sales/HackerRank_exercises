function libraryFine(d1, m1, y1, d2, m2, y2) {
    let answer = 0;


    if (y1 === y2) {
        if (m1 === m2) {
            answer = (d1 < d2) ? '0' : 15 * (d1 - d2);
        } else {
            answer = (m1 < m2) ? '0' : (m1 - m2) * 500;
        }
    } else {
        answer = (y2 - y1) === 1 ? '0' : (y1 - y2) * 10000;
    }

    return answer;

}
//https://www.hackerrank.com/challenges/library-fine/problem