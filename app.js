var x;
var y;
var operation;

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var zero = document.getElementById("0");

// Operation variables

var plus = document.getElementById("+");
var minus = document.getElementById("-");
var multiply = document.getElementById("x");
var split = document.getElementById("/");
var remove = document.getElementById("c");

var yNumberText = document.getElementById("yNumber-text");
var xNumberText = document.getElementById("xNumber-text");
var resultNumber = document.getElementById("resultNumber");

function clearScreen(x) {
  yNumberText.innerText = "";
  xNumberText.innerText = x;
}

function reset() {
  yNumberText.innerText = "";
  xNumberText.innerText = "";
  resultNumber.innerText = "";
  x = 0;
  y = 0;
  operation = "";
}

function resolve() {
  var res = 0;
  switch (operation) {
    case "+":
      res = parseFloat(x) + parseFloat(y);
      yNumberText.innerText = "";
      xNumberText.innerText = "";
      resultNumber.innerText = res;
      return;
      break;

    case "-":
      res = parseFloat(x) - parseFloat(y);
      yNumberText.innerText = "";
      xNumberText.innerText = "";
      resultNumber.innerText = res;
      return;
      break;
    case "x":
      res = parseFloat(x) * parseFloat(y);
      yNumberText.innerText = "";
      xNumberText.innerText = "";
      resultNumber.innerText = res;
      return;
      break;

    case "/":
      res = parseFloat(x) / parseFloat(y);
      yNumberText.innerText = "";
      xNumberText.innerText = "";
      resultNumber.innerText = res;
      return;
      break;

    default:
      yNumberText.innerText = "Syntax Error.";
      xNumberText.innerText = "";
      break;
  }

  if ((resultNumber.innerText = "NaN")) {
    yNumberText.innerText = "Syntax Error.";
    xNumberText.innerText = "";
    resultNumber.innerText = "";
  }
}

var test = document.getElementById("test-text");

var equals = document.getElementById("=");

// for (let i = 0; i < 11; i++) {

//     test.innerHTML = i;

// }

one.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "1";
};
two.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "2";
};
three.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "3";
};
four.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "4";
};
five.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "5";
};
six.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "6";
};
seven.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "7";
};
eight.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "8";
};
nine.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "9";
};
zero.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "0";
};

plus.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "+";
  operation = "+";
  x = yNumberText.innerText;
  clearScreen(x);
};
minus.onclick = function () {
  if (yNumberText.textContent == "") {
    yNumberText.innerText = "-";
    console.log("No habia menos... Ya hay");
    return;
  } else {
    yNumberText.innerText = yNumberText.innerText;
    operation = "-";
    x = yNumberText.innerText;
    console.log("Ya habia una operacion");
    clearScreen(x);
  }
  console.log(yNumberText);
};
multiply.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "x";
  operation = "x";
  x = yNumberText.innerText;
  clearScreen(x);
};
split.onclick = function () {
  yNumberText.innerText = yNumberText.innerText + "÷";
  operation = "/";
  x = yNumberText.innerText;
  clearScreen(x);
};

equals.onclick = function () {
  y = yNumberText.innerText;
  resolve();
};

remove.onclick = function () {
  reset();
};
