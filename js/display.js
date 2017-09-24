// class Display {
//   showResult(result) {
//     document.getElementsByName('result')[0].value = result;
//   }
//
//   showError() {
//     document.getElementsByName('result')[0].value = 'Error';
//   }
// }

const display = {
  showResult(result) {
    // if (result = '') {
    //   result = 0;
    // }
    document.getElementsByName('result')[0].value = result;
  },

  showError() {
    document.getElementsByName('result')[0].value = 'Error';
  }
}
