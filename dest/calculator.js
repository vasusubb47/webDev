"use strict";
var ioEle = document.getElementById("io");
var btns;
btns = [...document.getElementsByClassName("btn")];
const getCharValue = (char) => {
    if ((char === "/") || (char === "%") || (char === "*")) {
        return 2;
    }
    else if ((char === "+") || (char === "-")) {
        return 1;
    }
    else {
        return -1;
    }
};
const isValidChar = (char) => {
    ['+', '-', '*', '%', '/'].forEach(value => {
        if (value === char) {
            return true;
        }
    });
    return false;
};
const solve = (equation) => {
    var opStack = [];
    var infix = [];
    var int = "", char = "";
    for (var i = 0; i < equation.length; i++) {
        char = equation[i];
        if ((char >= '0' && char <= '9') || (char === '.')) {
            int += char;
            continue;
        }
        if (int.length != 0) {
            infix.push(+int);
            int = "";
        }
        if (opStack.length != 0) {
            if (char === "(") {
                opStack.push(char);
            }
            else if (char === ")") {
                while (opStack.length > 0 && opStack[length - 1] != ")") {
                    infix.push(opStack.pop());
                }
                opStack.pop();
            }
            else if ((getCharValue(opStack[opStack.length - 1]) < getCharValue(char)) && isValidChar(char)) {
                opStack.push(char);
            }
            else {
            }
        }
        else if (isValidChar(char)) {
            opStack.push(char);
        }
        else {
            return "Error";
        }
    }
    return equation;
};
btns.forEach(element => {
    element.addEventListener("click", (e) => {
        var data = e.target.firstChild.data;
        if (data === "AC") {
            ioEle.value = "";
        }
        else if (data === "=") {
            ioEle.value = solve(ioEle.value);
        }
        else {
            ioEle.value += data;
        }
    });
});
var form = document.getElementById("CalForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
