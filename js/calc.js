const calc = {
  success: function() {
    alert('success')
  },

  addMethod: function(name, funct) {
    calc.name = funct;
  },

  add: function(a, b) {
    return a + b
  },

  substract: function(a, b) {
    return a - b
  },

  divide: function(a, b) {
    return a / b
  },

  multiply: function(a, b) {
    return a * b
  },

  calc: function(str) {
    const inputRow = document.getElementById("input").value;
    const inputs = inputRow.split(" ");
    const firstNum = parseFloat(inputs[0]);
    const secondNum = parseFloat(inputs[2]);
    let result;
    switch (inputs[1]) {
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
      default:
        result = 'input is incorrect'
    }
    document.getElementsByName('result')[0].value = result;
  }
}
