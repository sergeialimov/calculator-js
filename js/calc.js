const calc = {
  tmp: '',
  firstNum: '',
  secondNum: '',
  action: '',
  sum: '',

  calc() {
    utils.parseNums();
    switch (calc.action) {
      case '-':
        calc.sum = calc.subtract();
        break;
      case '+':
        calc.sum = calc.add();
        break;
      case '*':
        calc.sum = calc.multiply();
        break;
      case '/':
        calc.sum = calc.divide();
        break;
    }
    calc.action = '';
    calc.firstNum = calc.sum;
    calc.sum = '';
    calc.secondNum = '';
    display.showResult(calc.firstNum);
  },

  add() {
    return calc.firstNum + calc.secondNum;
  },

  subtract() {
    return calc.firstNum - calc.secondNum;
  },

  divide(a, b) {
    if (b === 0) display.showError();
    return calc.firstNum / calc.secondNum;
  },

  multiply() {
    return calc.firstNum * calc.secondNum;
  }
}
