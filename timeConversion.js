function timeConversion(s) {
    const pattern = /(.?[\d]{2}){3}/g;
    const converTime = pattern.exec(s)[0].split(':');
    let hour = 0,
        time = s;

    if (time.includes('PM')) {
        hour = converTime[0] === '12' ? '12' : Number(converTime[0]) + 12;
        hour = (hour === 24) ? '00' : hour;

        return `${hour}:${converTime[1]}:${converTime[2]}`;

    } else if (time.includes('AM')) {
        hour = converTime[0];
        hour = (hour === '12') ? '00' : hour;
        return `${hour}:${converTime[1]}:${converTime[2]}`
    }
}

// /https://www.hackerrank.com/challenges/time-conversion/problem