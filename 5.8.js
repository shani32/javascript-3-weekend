function longest(str) {
    let words = str.split(' ');
    let maxWord = words[0].length;
    let longestword = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxWord) {
            maxWord = words[i].length;
            longestword = words[i]
        }
    }
    return longestword;
}

console.log(longest('we are the champions of the world'))
