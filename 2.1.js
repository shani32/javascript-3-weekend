function lowestNum(num) {
    let array = num.sort(function (a, b) {
        return a - b;
    });
    let lowNumbers = array.splice(0, 2);
    let sum = 0;
    for (let i = 0; i < lowNumbers.length; i++) {
        sum += lowNumbers[i];
    }
    return sum;
};

console.log(lowestNum([1, 5, 1, 2, 17]));