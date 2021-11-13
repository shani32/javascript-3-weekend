function theWeirdCase(str) {
    str = str.toLowerCase().split('')
    console.log(str);
    for (let j = 0; j < str.length; j++) {
        if (j % 2 === 0) {
            str[j] = str[j].toUpperCase()
        }
    }
    return str.join('')
}
console.log(theWeirdCase('the day is amazing'))