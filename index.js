const display = document.getElementById("display");
let output = false;
function appendToDisplay(input) {
  if (output === true) {
    display.value = "";
    output = false;
  }
  display.value += input;
}
function clearDisplay() {
  display.value = "";
  output = false;
}
function calculate() {
  try {
    display.value = eval(
      display.value
        .replace(/\^/g, "**")
        .replace(/%/g, "/100")
        .replace(/x/g, "*"),
    );
  } catch (error) {
    display.value = "Error";
  }
  output = true;
}
