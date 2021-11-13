function repeat(num, str) {
    let repeats = [];
    while (repeats.length < num) {
        repeats.push(str);
    }
    return repeats.join('');
}
console.log(repeat(3, 'i'))
console.log(repeat(5, 'hello'))
