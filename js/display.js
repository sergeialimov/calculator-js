const display = {
  showResult(result) {
    document.getElementsByName('result')[0].value = result;
  },

  showError() {
    document.getElementsByName('result')[0].value = 'Error';
  }
}
