const calc = {
  tmp: '',
  firstNum: '',
  secondNum: '',
  action: '',
  sum: '',

  showResult: function(result) {
    document.getElementsByName('result')[0].value = result;
  },

  addNumber: function(number) {
    if (number === 0 && calc.tmp === '0') {
      return;
    }
    if (calc.tmp === '0') {
      calc.tmp = '';
    }
    calc.tmp += number;
    console.log('number:', calc.tmp);
    calc.showResult(calc.tmp);
  },

  addAction: function(action) {
    if (!calc.firstNum) {
      calc.firstNum = calc.tmp;
      calc.tmp = '';
      calc.action = action;
    } else {
      calc.secondNum = calc.tmp;
      calc.parseNums;
      switch (action) {
        case '-':
          result = calc.substract(firstNum, secondNum);
          break;
        case '+':
          result = calc.add(firstNum, secondNum);
          break;
        case '*':
          result = calc.multiply(firstNum, secondNum);
          break;
        case '/':
          result = calc.divide(firstNum, secondNum);
          break;
      }
    }
    console.log('func', calc.action);
    calc.showResult(calc.action);
  },

  parseNums: function() {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
  },

  add: function(a, b) {
    calc.sum = a + b;
    console.log('sum', calc.sum);
    calc.showResult(calc.sum);
  },

  substract: function(a, b) {
    calc.sum = a - b;
    calc.showResult(calc.sum);
  },

  divide: function(a, b) {
    calc.sum = a / b;
    calc.showResult(calc.sum);
  },

  multiply: function(a, b) {
    calc.sum = a * b;
  },

  clear: function() {
    calc.tmp = '0';
    calc.action = '';
    console.log('number:', calc.tmp);
    calc.showResult(0);
  }
}
