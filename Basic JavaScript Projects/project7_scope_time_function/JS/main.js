var y = 20 //global variable here can be used by any function

function local_variable() { //local variable is within the function 
    var x = 10
    document.getElementById("local").innerHTML = (x + 20);
}

function global_variable() {
    document.getElementById("global").innerHTML = (y + 20);
}

function greeting() {
    if (new Date().getHours() < 19) {
        document.getElementById("time").innerHTML = "this message will work until after 7pm";
    }
}

function if_statement() {
    if (new Date().getHours() >= 13) {
        document.getElementById("four").innerHTML = "it's not past 4pm yet!";
    }
    else {
        document.getElementById("four").innerHTML = "it's past 4pm or equal to 4pm!"
        
    }
}

function one() {
    age = document.getElementById("age").value;
    if (age >= 25) {
        var rent = "you are old enough to rent";
    }
    else {
        var rent = "you are not old enough to rent";
    }
    document.getElementById("how_old_are_you?").innerHTML = rent;

}

function random_weather() { // here i made my own function to do weather randomized. it picks a random number from 0-2 and then i used an if, else if, else to determine what that number meant for the text. 
    var snowing = 0;
    var raining = 1;
    var neither = 2;
    var random_number = Math.floor(Math.random() * 3);

    document.getElementById("weather").innerHTML = random_number;
    

    if (random_number === 0) { // here i use triple = since i am doing comparison, not assignment. 
        document.getElementById("weather_text").innerHTML = "it is snowing! you need to bundle up!"; //setting the text of the p element to be this. 
    }
    else if (random_number === 1) {
        document.getElementById("weather_text").innerHTML = "it's raining, you need an umbrella!";
    }
    else {
        document.getElementById("weather_text").innerHTML = "it's sunny! you can wear some shorts!"
    
    }
    


    }