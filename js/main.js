const main = {
  addNumber(number) {
    // if (!number && !calc.tmp) {
    //   return;
    // }
    if (calc.tmp === '0' && number !== ',') { // это условие нужно, чтобы обработать стартовый ноль
      console.log('addNumber' + number);
      calc.tmp = '';
    }
    if (!calc.tmp && number === ',') {
      calc.tmp = '0';
    }
    calc.tmp += number;
    utils.log('addNumber');
    display.showResult(calc.tmp);
  },

  addAction(action) {
    if (!calc.firstNum && calc.tmp) { // если firstNum пустой, а tmp нет
      utils.logStep('addAction, if #1');
      calc.firstNum = calc.tmp; //  записать временное значение чисел в firstNum
      calc.tmp = ''; // обнулить временное значение
      calc.action = action; // присвоить значение операции переменной
      display.showResult(calc.firstNum);
    } else if (calc.firstNum && calc.tmp) { // если firstNum не пустой и в tmp что-то есть
      utils.logStep('addAction, if #2');
      calc.secondNum = calc.tmp;
      calc.tmp = '';
      calc.calc();
      calc.action = action; // присвоить значение операции переменной
    } else if (calc.firstNum && !calc.secondNum && !calc.tmp) { //firstNum не пустой, а в secondNum и tmp ничего нет
      utils.logStep('addAction, if #3');
      calc.action = action;
      display.showResult(calc.firstNum);
    }
    utils.log('addAction');
  },

  finish() {
    if (calc.firstNum && calc.tmp) {
      calc.secondNum = calc.tmp;
      calc.tmp = '';
      calc.calc();
    }
    utils.log('finish');
  },

  clear() {
    calc.tmp = '0';
    calc.firstNum = '';
    calc.secondNum = '';
    calc.action = '';
    display.showResult(0);
  }
}
