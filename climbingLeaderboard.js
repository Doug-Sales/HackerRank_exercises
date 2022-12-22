function climbingLeaderboard(ranked, player) {
    const scores = [...new Set(ranked)].sort((a, b) => b - a);
    const ranks = [];

    let start = 0,
        end = scores.length - 1;

    for (let i = 0; i < player.length; i++) {
        while (start <= end) {
            const value = Math.floor((start + end) / 2);
            if (scores[value] > player[i]) {
                start = value + 1;
            } else {
                end = value - 1;
            }
        }

        ranks.push(start + 1);

        start = 0;
        end = scores.length - 1;
    }

    return ranks
}

//https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem