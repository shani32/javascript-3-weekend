function findNextSquare(square) {
    let num;
    let secondNum;
    if (Math.sqrt(square) % 1 === 0) {
        num = Math.sqrt(square)
        secondNum = num + 1

    } else {
        return -1
    }
    return secondNum * secondNum
}
console.log(findNextSquare(121))
console.log(findNextSquare(11))
console.log(findNextSquare(64))
