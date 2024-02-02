const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'AC') {
      display.value = '';
    }
    else if (value === 'DE') {
      display.value = display.value.toString().slice(0, -1);
    }
    else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        // If there's an error, display "Error"
        display.value = 'Error';
      }
    }
    else {
      display.value += value;
    }
  });
});
