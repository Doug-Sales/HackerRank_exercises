function pageCount(n, p) {
   
    const targetPage = p;
    const numberOfPages = n;
    const frontPage = (targetPage < 2 || (numberOfPages - 1) === targetPage) ? true : false;
    const frontOrBackBook = ((numberOfPages - targetPage) < targetPage) ? numberOfPages : 0;
    const onePage = (numberOfPages % 2 === 0 && numberOfPages !== 2) && ((numberOfPages - 1) === targetPage)
    
    let counterFlipLeft = 0,
        counterFlipRight = 0;

    if (onePage) return 1;

    if (!frontPage) {
        if (frontOrBackBook === 0) {
            for (let i = 0; i < targetPage; i++) {
                (i % 2 === 1) ? counterFlipRight++ : counterFlipRight;                
            }
        }

        if (frontOrBackBook === numberOfPages) {
            for (let i = numberOfPages; i > targetPage; i--) {
                (i % 2 === 0) ? counterFlipLeft++ : counterFlipLeft;                
            }
        }
    }

    return counterFlipRight || counterFlipLeft;
}


//https://www.hackerrank.com/challenges/drawing-book/problem

















