
function maskify(password) {
    if (password.length <= 4) {
        return password;
    } else {
        let lastDigits = '';
        for (let i = password.length - 1; i >= password.length - 4; i--) {
            lastDigits = password[i] + lastDigits;
        }
        let mask = '';
        for (let j = 0; j < password.length; j++) {
            mask += '#';

        }
        return mask + lastDigits
    }
}
console.log(maskify('hgjftughh'))
