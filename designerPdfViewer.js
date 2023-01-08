function designerPdfViewer(h, word) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz',
        sizeSelected = 0,
        indexNumber = 0;


    for (let letter of word) {
        sizeSelected = (alphabet.indexOf(letter))
        sizeSelected = (h[sizeSelected])
        indexNumber = sizeSelected > indexNumber ? sizeSelected : indexNumber;
    }
    
    return indexNumber * word.length

}
//https://www.hackerrank.com/challenges/designer-pdf-viewer