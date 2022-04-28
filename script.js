"use strict";

const inputValue = document.querySelector("#d");

function v(value) {
  inputValue.value += value;
}
function e() {
  const evalValue = eval(inputValue.value);
  inputValue.value = evalValue;
}
function c(value) {
  inputValue.value = value;
}
function b(value) {
  let value1 = Number(document.querySelector("#d").value);
  if (value === "dec") {
    inputValue.value = `${value1} to Decimal ${value1.toString(10)}`;
  } else if (value === "bin") {
    inputValue.value = `${value1} to Binary ${value1.toString(2)}`;
  } else if (value === "oct") {
    inputValue.value = `${value1} to Octal ${value1.toString(8)}`;
  } else if (value === "hex") {
    inputValue.value = `${value1} to Hexa Decimal ${value1.toString(16)}`;
  }
}
document.addEventListener("keydown", function (e) {
  try {
    if (
      (e.keyCode >= 46 && e.keyCode <= 57) |
      (e.keyCode >= 96 && e.keyCode <= 105) |
      (e.keyCode >= 106 && e.keyCode <= 111) |
      (e.keyCode === 13) |
      (e.keyCode === 187) |
      (e.keyCode === 8)
    ) {
      if ((e.keyCode === 13) | (e.key === "=")) {
        const evalValue = eval(inputValue.value);
        inputValue.value = evalValue;
      } else if (e.keyCode === 8) {
        const stringValue = String(inputValue.value);
        inputValue.value = stringValue.slice(0, stringValue.length - 1);
      } else if (e.keyCode === 46) {
        inputValue.value = "";
      } else {
        inputValue.value += e.key;
      }
    }
  } catch (err) {
    document.querySelector("#d").value = err.name;
  }
});
