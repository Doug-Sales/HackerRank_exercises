function camelcase(s) {

    return (s.match(/[A-Z]/g) || []).length + 1;

}
//https://www.hackerrank.com/challenges/camelcase