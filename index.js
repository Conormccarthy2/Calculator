const display = document.getElementById("display");
let output = false;
let ANS = 0;
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
  if (display.value !== "Error") {
    ANS = display.value;
  }
}
function backspace() {
  if (display.value === "Error") {
    clearDisplay();
    return;
  }

  display.value = display.value.endsWith("ANS")
    ? display.value.slice(0, -3)
    : display.value.slice(0, -1);

  output = false;
}
document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;

  const key = event.key;

  if (/^[0-9]$/.test(key) || ["+", "-", "/", ".", "^", "%"].includes(key)) {
    appendToDisplay(key);
  } else if (key === "*" || key.toLowerCase() === "x") {
    appendToDisplay("x");
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLocaleLowerCase() === "c") {
    clearDisplay();
  } else if (key.toLowerCase() === "a") {
    appendToDisplay("ANS");
  } else {
    return;
  }

  event.preventDefault();
});
