// creates an object to keep track of values
const Calculator = {
    // this will set the string to 0 to display
    Display_Value: '0',
    // this holds the first operand for any expressions
    First_Operand: null,
    // this checks wether  or not the second operand has been inputted
    Wait_Second_Operand: false,
    // this holds the operator
    operator: null,
};

// this modifies each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    // this checks if the waitoperand is true and sets display_value
    // to the key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrites display_value if the current value is 0 otherwise it adds to it.
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}

// this handles decimal points
function Input_Decimal(dot) {
    // this makes sure if you accidentally click on a decimal point it doesn bug the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // if the value does not contain a decimal point we are saying to add one
        Calculator.Display_Value += dot;
    }
}

// this section handles operators 
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    // when an operator key is pressed we conver the current number
    // displayed on the screen to a number and then store th result in calc first operand
    const Value_of_Input = parseFloat(Display_Value);
    // checks if an operator already exists and if wait_second operand is true
    // then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        // if operator exists the property lookup is performed for the operator
        // in the perform_calc object and the function that matches the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // adding fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        // removes trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
}
Calculator.Wait_Second_Operand = true;
Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    // resets all values to the starting point first defined when making calc object 
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null
}

// this func updates the calc screen with the contents of display_value
function Update_Display() {
    // query selector selects the calculator screen class and stores it in display
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;

}

Update_Display();
// this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => { 
    // event is an object that represents the element that was clicked
    const { target } = event;
    // if the element clicked on is not a button then exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return
    }
    Input_Digit(target.value);
    Update_Display();
})
