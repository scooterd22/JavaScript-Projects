function favorite_food() {
    var food_output;
    var foods = document.getElementById("food_input").value;
    var food_string = " is great for your health!";
    switch(foods) {
        case "rock":
            food_output = "rock" + food_string;
        break;
        case "stone":
            food_output = "stone" + food_string;
        break;
        case "lettuce":
            food_output = "lettuce" + food_string;
        break;
        default:
            food_output = "please match it to the list";
    }
    document.getElementById("output").innerHTML = food_output;
}