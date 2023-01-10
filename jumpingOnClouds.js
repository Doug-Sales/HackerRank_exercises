function jumpingOnClouds(c) {
    let numJumps = 0,
        i = 0;

    while (i < c.length - 1) {
        if (c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        numJumps++;
    }

    return numJumps;
}
//https://www.hackerrank.com/challenges/jumping-on-the-clouds