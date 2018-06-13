window.onload = function() {

  /*----------  numbers  ----------*/
  document.getElementById("num-0").onclick = function() {
    main.addNumber(0);
  },
  document.getElementById("num-1").onclick = function() {
    main.addNumber(1);
  },
  document.getElementById("num-2").onclick = function() {
    main.addNumber(2);
  },
  document.getElementById("num-3").onclick = function() {
    main.addNumber(3);
  },
  document.getElementById("num-4").onclick = function() {
    main.addNumber(4);
  },
  document.getElementById("num-5").onclick = function() {
    main.addNumber(5);
  },
  document.getElementById("num-6").onclick = function() {
    main.addNumber(6);
  },
  document.getElementById("num-7").onclick = function() {
    main.addNumber(7);
  },
  document.getElementById("num-8").onclick = function() {
    main.addNumber(8);
  },
  document.getElementById("num-9").onclick = function() {
    main.addNumber(9);
  },
  document.getElementById("num-,").onclick = function() {
    main.addNumber(',');
  },

  /*----------  actions  ----------*/
  document.getElementById("act-multiply").onclick = function() {
    main.addAction('*');
  },
  document.getElementById("act-divide").onclick = function() {
    main.addAction('/');
  },
  document.getElementById("act-subtract").onclick = function() {
    main.addAction('-');
  },
  document.getElementById("act-add").onclick = function() {
    main.addAction('+');
  },

  /*----------  other functions  ----------*/
  document.getElementById("clear").onclick = function() {
    main.clear();
  },
  document.getElementById("finish").onclick = function() {
    main.finish();
  },
  document.getElementById("revert").onclick = function() {},
  document.getElementById("percent").onclick = function() {
    main.clear("percent");
  }
};
