function CamelCase(convertStr) {
    let change = convertStr.split('');
    for (let i = 0; i < change.length; i++) {
        if (change[i] === "-" || change[i] === "_") {
            change[i + 1] = change[i + 1].toUpperCase();
            change.splice(i, 1)
        }
    }
    convertStr = change.join('');

    return convertStr;
}
console.log(CamelCase('hello-my-friends'))