function catAndMouse(x, y, z) {
    let catA = Math.abs(z - x),
        catB = Math.abs(z - y);

    const [catACaught , catBCaught] = [(catA < catB), (catB < catA)];
        
        return (catACaught) ? 'Cat A' : (catBCaught) ? 'Cat B' : 'Mouse C';
}


// Link = https://www.hackerrank.com/challenges/cats-and-a-mouse/problem