
function caesarCipher(s, k) {

    let ciphertext = "",
        regex = /[a-z]/i;

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (letter.match(regex)) {
            let charCode = s.charCodeAt(i);
            if ((charCode >= 65) && (charCode <= 90)) {
                letter = String.fromCharCode(((charCode - 65 + k) % 26) + 65);
            } else if ((charCode >= 97) && (charCode <= 122)) {
                letter = String.fromCharCode(((charCode - 97 + k) % 26) + 97);
                
            }
        }
        ciphertext += letter;
    }
    return ciphertext;

}
//https://www.hackerrank.com/challenges/caesar-cipher-1/problem


