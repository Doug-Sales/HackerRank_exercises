function bonAppetit(bill, k, b) {
    let arrBill = Array.from(bill),
        removeFromBill = k,
        shePaid = b;

    const totalBill = arrBill.reduce((acc, value) => acc + value, 0)
    const anaHasToPay = (totalBill - arrBill[removeFromBill]) / 2;
    const differenceValue = shePaid - anaHasToPay;

    if (differenceValue < 1) {
       return console.log('Bon Appetit')
    }

    return console.log(differenceValue)

}

//https://www.hackerrank.com/challenges/bon-appetit/problem