function adding() {
var addition = 2 + 2; // uses the var addition to do and store the answer of 2 + 2 
// note this is true for every single one of these functions 
document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
// here we get the ID of the P we want it to display on when clicked. 
// we then use the string 2 + 2 since it's the equation being done to show up 
// for asthetic. We concatenate the string with addition which holds are answer of the equation. 
}

function subtracting() {
    var sub = 22 - 17;

    document.getElementById("subtraction").innerHTML = "22 - 17 = " + sub;
}

function multiplicating() {
    var multiply = 90 * 51;

    document.getElementById("multi").innerHTML = "90 x 51 = " + multiply;
}


function dividing() {
    var divide = 1000/20;

    document.getElementById("divi").innerHTML = "1000/20 = " + divide;
}

function complex_math() {
    var complex_equation = (10 * 20) + 30 - 15;

    document.getElementById("complex").innerHTML = "(10 * 20) + 30 - 15 = " + complex_equation;
}


function remainder() {
    var rem_equation =  899 % 20;

    document.getElementById("rem").innerHTML = "899 / 20 has a remainder of " + rem_equation;
}

function negation_operator() {
    var x = 10;

    document.getElementById("neop").innerHTML = "it turns 10 into " + -x;
}

function increment_operator() {
    var x = 3;
    x++;

    document.getElementById("incre").innerHTML = "it changed it to be " + x;
}

function decrement_operator() {
    var x = 3;
    x--;

    document.getElementById("decre").innerHTML = "it changed it to be " + x;
}

function random_number() {
    var x = Math.floor(Math.random() * 1000); // using a built in function we get a random number from 1-1000
    // we use the math.floor to round to the nearest whole number.
    document.getElementById("randi").innerHTML = "your random number from 1 - 1000 is " + x 
}

function gives_pie() {
    var x = Math.PI; // using a built in function we get PI

    document.getElementById("pie").innerHTML = x;
}