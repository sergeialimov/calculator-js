
const utils = {
  parseNums: function() {
    calc.firstNum = parseFloat(calc.firstNum);
    calc.secondNum = parseFloat(calc.secondNum);
  },

  log: function(functionName) {
    console.log(`${functionName} calc.firstNum:`, calc.firstNum);
    console.log(`${functionName} calc.action:`, calc.action);
    console.log(`${functionName} calc.secondNum:`, calc.secondNum);
    console.log(`${functionName} calc.tmp:`, calc.tmp);
    console.log(`${functionName} calc.sum:`, calc.sum);
    console.log('--');
  },

  logStep: function(stepName) {
    console.log(stepName);
  }
}
