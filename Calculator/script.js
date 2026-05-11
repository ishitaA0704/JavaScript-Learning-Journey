const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        display.value = eval(display.value); //Note: eval can be dangerous if used with untrusted input.
           // In a real application, consider using a safer alternative.
    } catch (error) {
        display.value = 'Error';
    }   
}