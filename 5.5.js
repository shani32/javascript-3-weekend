function AbbreviateTwoWords(sentence) {
    const str = sentence.split(' ');
    const firstName = str[0]
    const secondName = str[1]
    let result = firstName[0].toUpperCase() + '.' + secondName[0].toUpperCase();

    return result;

}

console.log(AbbreviateTwoWords('beer sheva rules'))