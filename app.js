
var x
var y
var operation

var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');

// Operation variables

var plus = document.getElementById('+');
var minus = document.getElementById('-');
var multiply = document.getElementById('x');
var split = document.getElementById('/');
var remove = document.getElementById('c');


var yNumberText = document.getElementById('yNumber-text');
var xNumberText = document.getElementById('xNumber-text');
var resultNumber = document.getElementById('resultNumber');

function clearScreen(x){
    yNumberText.textContent = "";
    xNumberText.textContent = x
}

function reset(){
    yNumberText.textContent = "";
    xNumberText.textContent = "";
    resultNumber.textContent = "";
    x = 0;
    y = 0;
    operation = "";

}

function resolve(){
    var res = 0

    switch (operation) {
        case "+":
            res = parseFloat(x) + parseFloat(y)
            yNumberText.textContent = "";
            xNumberText.textContent = "";
            resultNumber.textContent = res;
            break;
        
        case "-":
            res = parseFloat(x) - parseFloat(y)
            yNumberText.textContent = "";
            xNumberText.textContent = "";
            resultNumber.textContent = res;
            break;
        case "x":
            res = parseFloat(x) * parseFloat(y);
            yNumberText.textContent = "";
            xNumberText.textContent = "";
            resultNumber.textContent = res;
            break;

        case "/":
            res = parseFloat(x) / parseFloat(y);
            yNumberText.textContent = "";
            xNumberText.textContent = "";
            resultNumber.textContent = res;
            break;
                
        default:
            yNumberText.textContent = "Syntax Error."
            xNumberText.textContent = "";
            break;
    }
    

}

var test = document.getElementById('test-text');

var equals = document.getElementById("=");

// for (let i = 0; i < 11; i++) {

//     test.innerHTML = i;
    
// }

one.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "1"
}
two.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "2"
}
three.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "3"
}
four.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "4"
}
five.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "5"
}
six.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "6"
}
seven.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "7"
}
eight.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "8"
}
nine.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "9"
}
zero.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "0"
}


plus.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "+"
    operation = "+"
    x = yNumberText.textContent;
    clearScreen(x);
}
minus.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "-"
    operation = "-"
    x = yNumberText.textContent;
    clearScreen(x);
}
multiply.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "x"
    operation = "x"
    x = yNumberText.textContent;
    clearScreen(x);
}
split.onclick = function(){
    yNumberText.textContent = yNumberText.textContent + "÷"
    operation = "/"
    x = yNumberText.textContent;
    clearScreen(x);
}




equals.onclick = function(){
    y = yNumberText.textContent;
    resolve();
}

remove.onclick = function(){
    reset();
}



