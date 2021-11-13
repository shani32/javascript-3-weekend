let sum = 0;
let binary = [1, 1, 1, 1];
function oneAndZero(binary) {
    for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {

        sum += binary[i] * 2 ** j;
    }
    return sum;

}

console.log(oneAndZero(binary))