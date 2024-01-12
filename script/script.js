//Selects the element with the class "display".
const display = document.querySelector(".display");
// Selects all button elements.
const buttons = document.querySelectorAll("button");
// Array containing special characters.
const specialChars = ["%", "*", "/", "-", "+", "="];
// Variable holding the output string, which will be displayed in the "display" element.
let output = "";

//Function to calculate based on button clicked.
// "calculate" that takes a button value as input and performs actions based on the clicked button.
const calculate = (btnValue) => {
    display.focus();  //to ensure any input to be directed here.

    // If the "=" button is clicked and the output string isn't empty, this block handles the calculation.
    if (btnValue === "=" && output !== "") {
        //Here if output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = ""; //resets output string to an empty string.
    } else if (btnValue === "DEL") {
        //If DEL button is clicked, it removes the last character from the output.
        output = output.toString().slice(0, -1);
    } else {
        //If output is empty and button is special character(specialChars) then return
        if (output === "" && specialChars.includes(btnValue)) return;
        // else button value is attached to the output string
        output += btnValue;
    }
    //updating value of "display" with current output string.
    display.value = output;
};

//Adding event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //Button click listener calls calculate() with dataset.value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});