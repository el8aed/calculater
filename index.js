const buttons = document.querySelectorAll("button");
const inputText = document.getElementById("result");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const buttonValue = buttons[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DEL") {
      del();
    } else {
      appendValue(buttonValue);
    }
  });
}
function clearResult() {
    inputText.value = "";

}

function calculateResult() {
  const value = inputText.value.trim();
  if (value === "") {
    return;
  }
  try {
    inputText.value = eval(value);
  } catch (error) {
    inputText.value = "Error";
  }
}

function appendValue(buttonValue) {
  inputText.value += buttonValue;
}
function del() {
  let deletValue = inputText.value;
  inputText.value = deletValue.slice(0, -1);
}
