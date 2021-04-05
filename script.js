"use strict";
var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var mini = document.getElementById('mini-display');
var operand1 = 0;
var operand2 = null;
var operator = null;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-val');
        if ((value == '+') || (value == '-') || (value == '*') || (value == '/')) {
            if (value == '-' && display.innerText == '-' && display.innerText.length == 1) {
                display.innerText = '';
            } else if (value == '-' && display.innerText.length == 0)
                display.innerText = '-';
            else {
                if (display.textContent != '.' && display.textContent != '' && display.textContent != '-') {
                    if (operator == null) {
                        operand1 = parseFloat(display.textContent);
                        operator = value;
                        display.innerText = '';
                        mini.innerText = operand1 + " " + operator;
                    } else {
                        operand2 = parseFloat(display.textContent);
                        mini.innerText += " " + operand2;
                        var result = eval(operand1 + " " + operator + " " + operand2);
                        operator = value;
                        mini.innerText = result + " " + operator;
                        display.innerText = '';
                        operand1 = result;
                        operand2 = null;
                    }
                }

            }


        } else if (value == 'd') {
            display.innerText = '';
            mini.innerText = '';
            operator = null;
            operand1 = 0;
            operand2 = null;
        } else if (value == 'b') {
            var temp = display.innerText;
            temp = temp.substring(0, temp.length - 1);
            display.innerText = temp;
        } else if (value == 'cr') {
            if (display.innerText.length != 0 && display.innerText != '.' && display.innerText != '-') {
                var temp = parseFloat(display.innerText);
                var result;
                if (temp < 0) {
                    display.innerText = "Error";
                } else {
                    result = Math.cbrt(temp);
                    display.innerText = result;
                    mini.innerText = 'cuberoot(' + temp + ') ='
                }
            }
        } else if (value == '%') {
            if (display.innerText != '.' && display.innerText != '-') {
                operand1 = parseFloat(display.innerText);
                var result = eval(operand1 + " / 100");
                display.innerText = result;
                operand1 = result;
            }

        } else if (value == 'i') {
            if (display.innerText.length != 0 && display.innerText != '.' && display.innerText != '-') {
                operand1 = parseFloat(display.innerText);
                var result = eval('1 / ' + operand1);
                mini.innerText = '1/' + operand1 + " =";
                display.innerText = result;
                operand1 = result;
            }

        } else if (value == 's') {
            if (display.innerText != '.' && display.innerText != '-') {
                operand1 = parseFloat(display.innerText);
                var result = eval(operand1 + " * " + operand1);
                mini.innerText = "square(" + operand1 + ") ="
                display.innerText = result;
            }

        } else if (value == 'r') {
            if (display.innerText != '.' && display.innerText != '-') {
                if (display.innerText.length != 0) {
                    var temp = parseFloat(display.innerText);
                    var result;
                    if (temp < 0) {
                        display.innerText = "Error";
                    } else {
                        result = Math.sqrt(temp);
                        display.innerText = result;
                        mini.innerText = 'root(' + temp + ') ='
                    }
                }
            }

        } else if (value == 'pm') {
            if (operator == null) {
                if (display.innerText.length != 0 && display.innerText != '.' && display.innerText != '-') {
                    operand1 = parseFloat(display.innerText);
                    var result = eval(operand1 + " * (-1)");
                    display.innerText = result;
                    operand1 = result;
                }
            } else {
                operand2 = parseFloat(display.innerText);
                var result = eval(operand2 + " * (-1)");
                display.innerText = result;
                operand2 = result;
            }

        } else if (value == '=') {
            if (operator != null) {
                operand2 = parseFloat(display.textContent);
                mini.innerText += " " + operand2 + " =";
                var result = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = result;
                operator = null;
                operand1 = result;
            }
        } else {
            display.innerText += value;
        }
    });
}