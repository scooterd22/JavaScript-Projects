function ride_function() {
    var height, car_ride;
    height = document.getElementById('height').value;
    can_ride = (height < 52) ? "you are too short to ride":"you are tall enough to ride";
    document.getElementById('ride').innerHTML = can_ride + ' to ride.';

}

function vote_function() {
    var age, can_vote;
    age = document.getElementById('age').value;
    can_vote = (age >= 18) ? 'you are old enough':'you are not old enough'; // here is the ternary operation
    document.getElementById('vote').innerHTML = can_vote + ' to vote';

}

function vehicle(make, model, year, color) { //example of how to use this and new
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("dodge", "viper", 2020, "red");
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle("ford", "pinto", 1971, "mustard");
function myfunction() {
    document.getElementById('keywords_and_constructors').innerHTML = "erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_make + " manufacted in " + erik.vehicle_year;
}

function bunny(name, pounds, type) { //here i created my own for bunnies
    this.bunny_name = name; // 'this' is a placeholder for undetermined values
    this.bunny_pounds = pounds;
    this.bunny_type = type;
}
var trouble = new bunny("trouble", 2, "mini-rex"); //here i am creating an object type therefore using object constructor function
var leela = new bunny ("leela", 3, "holland-lop");
const chai = new bunny("chai", 1, "holland-lop"); // 
function mybunnyfunction() {
    document.getElementById("new_and_this").innerHTML = trouble.bunny_name + " is my " + trouble.bunny_type + " she weighs " + trouble.bunny_pounds + " pounds." + " I use to have a bunny name " + chai.bunny_name;
}

function reserved() { // this was a test that ultimately failed of using a keyword that is already defined. Nothing happens.
    var tester = stroke; 
    document.getElementById("res").innerHTML = tester;
}

function nestedfunc() { //here is my nested function, that being plus_three() and addsome()
    document.getElementById('nested').innerHTML = addsome();
    function addsome() {
        var starting_number = 5;
        function plus_three() {
            starting_number += 3;}
        plus_three();
        return starting_number;


        

    }
}