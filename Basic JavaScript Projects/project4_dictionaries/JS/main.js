function my_dictionary() {
    var bunnies = {
        name: "trouble",
        color: "brown and white",
        age: 2
    };

    document.getElementById("dict").innerHTML = bunnies.name;
    // here we are getting the key name and displaying the value in the string "trouble"

}

function my_dictionary_deletes() {
    var bunnies = {
        name: "trouble",
        color: "brown and white",
        age: 2
    };

    delete bunnies.name; // here we delete the key and value pair 
    document.getElementById("dictdelete").innerHTML = bunnies.name;

}