function call_loop() {
    var value ="";
    var x = 1;
    while (x < 20) {
        value += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = value
}

function call_length() {
    var text = "test";
    document.getElementById("length").innerHTML = text.length;
}

function for_loop() {
    var text = "";
    const names = ["scott", "jo", "trouble", "leela", "chai"];
    for (let x = 0; x < names.length; x++) {
        text += names[x] + "<br>";
        document.getElementById("list_of_names").innerHTML = text;

    }

}

function array_function() {
    var bunny_types = [];
    bunny_types[0] = "holland lop";
    bunny_types[1] = "flemish giant";
    bunny_types[2] = "mini rex";

    document.getElementById("array").innerHTML = "in this puicture the bunny is a " + bunny_types[1] + ".";
     }

function constant_function(){
    const bunny = {name: "trouble", type: "mini-rex", color: "broken whtie"};
    bunny.name = "leela";
    bunny.type = "holland lop";
    bunny.weight = "3.2";
    document.getElementById("constant").innerHTML = bunny.name + " is a " + bunny.type + " she weighs " + bunny.weight + "lbs";

}

function let_use() { 
    let x = 0;
    for (;x < 3; x++){
        document.getElementById("let").innerHTML = x;

    }


    
}

var x = return_function("scott");

function return_function(name) {
    document.getElementById("return").innerHTML = x;
    return "hello " + name;

}

let team = {
    name: "vipers",
    location: "seattle",
    year: "circa 1990",
    color: "purple & green",
    description : function() {
        return "the " + this.name + " is a team from " + this.location + " they were founded " + this.year;
    }

};
document.getElementById("team").innerHTML = team.description(); // this calls the function and runs it in the id we have in html.

function break_statement() {
    let message = "";
    for ( let x = 0; x<5; x++) {
        if (x>2) {break;} // the for loop breaks (jumps out of loop) when this returns true
        message += "the for loop will stop when " + x + " is equal to 2 " + "<br>";
    }
    document.getElementById("break").innerHTML = message;
}

function continue_statement() {
    let message = "";
    for ( let x = 0; x<10; x++) {
        if (x === 4 ) {continue;} // here the for loop ignores this point
        message += "the number is " + x + "<br>";
    }
    document.getElementById("continue").innerHTML = message;
}