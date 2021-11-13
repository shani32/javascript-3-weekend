function shortest(str) {
    let words = str.split(' ');
    let minWord = words[0].length;

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < minWord) {
            minWord = words[i].length;
        }
    }
    return minWord;
}

console.log(shortest('fhgdhgcgjb hgjh hjffb'))
