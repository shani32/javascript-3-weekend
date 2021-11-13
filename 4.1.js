function fib(num) {
    let num1 = 0, num2 = 1, num3, i;
    if (num == 0)
        return num1;
    for (i = 2; i <= num; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num2;
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))
console.log(fib(11))
console.log(fib(12))