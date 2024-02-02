const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');
let lastValue = ''; // Variable to store the last entered value

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    // Check if the last entered value is an operator
    const isOperator = ['+', '-', '*', '/'].includes(lastValue);

    if (value === 'AC') {
      display.value = '';
      lastValue = ''; // Reset lastValue
      enableButtons(); // Enable all buttons after AC is clicked
    } else if (value === 'DE') {
      display.value = display.value.toString().slice(0, -1);
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        // If there's an error, display "Error" and disable all buttons except AC
        display.value = 'Error';
        disableButtonsExceptAC();
      }
    } else if (!isOperator || (isOperator && !['+', '-', '*', '/'].includes(value))) {
      // Allow entering the value if it's not an operator or if it's an operator but not clicked twice in a row
      display.value += value;
      lastValue = value;
    }
  });
});

function disableButtonsExceptAC() {
  buttons.forEach(button => {
    if (button.value !== 'AC') {
      button.disabled = true;
    }
  });
}

function enableButtons() {
  buttons.forEach(button => {
    button.disabled = false;
  });
}
