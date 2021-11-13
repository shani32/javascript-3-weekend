const remove = oldStr => {
    let newStr = ''
    for (let i = 1; i < oldStr.length - 1; i++) {
        newStr += oldStr[i]
    }
    return newStr
}
console.log(remove('homeschool'))