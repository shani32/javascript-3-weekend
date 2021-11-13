function aka(arr, num) {
    let num1 = arr[0], num2 = arr[1], num3 = arr[2], help;
    if (num == 0)
        return num1;
    for (let i = 2; i <= num-2; i++) {
        help = num3
        num3 = num1 + num2 + num3;
        // num3 = num4;
        num1 = num2;
        num2 = help;
    }
    return num3;
}
console.log(aka([0,0,1],5))
