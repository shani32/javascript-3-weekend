function basicOp(sign,num1,num2){
    
      switch (sign) {
     
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 0;
      }
    
    }
  console.log(basicOp('+', 2, 7))
  console.log(basicOp('-', 9, 2))
  console.log(basicOp('*', 2, 7))
  console.log(basicOp('/', 14, 7))

