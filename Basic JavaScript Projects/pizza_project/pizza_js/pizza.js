function getReceipt() {
    var text1 = "<h3> you ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        // if i is less than the sizearray which holds all the types of sizes than add 1 to i 
        if (sizeArray[i].checked) { 
            // 8 checks it to be true that it checked the entire array
            var selectedSize = sizeArray[i].value;
            // 10 sets selectedSize equal to the value of the sizearray like "small" or "large"
            text1 = text1+selectedSize+"<br>"; 
            // 12 sets text 1 equal to the string we intially set it and the slected size with a line break
        }
    }
    // this is setting the price based on the value selected on the website
    if (selectedSize === "personal pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "small pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "medium pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "large pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "extra large pizza") {
        sizeTotal = 16;  
    }
    runningTotal = sizeTotal;
    // sets runningtotal to equal size total
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // the three lines above use console to write 
    // this now calls the topping function and passes the running total and text1
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    // sets topping total = to 0
    var toppingTotal = 0;
    // makes an empty array
    var selectedTopping = [];
    // this sets the toppingarray to equal the class toppings in our html
    var toppingArray = document.getElementsByClassName("toppings");
    // this is a for loop that sets j=0, then if j is less than the number of elements in the array, we add 1 to j and run the loop again
    for (var j=0; j < toppingArray.length; j++) {
        //  if a current topping is selected then...
        if (toppingArray[j].checked) {
            // this adds the selected topping to the back of the array
            selectedTopping.push(toppingArray[j].value);
            // the string is said then it adds which toping to the end of it 
            console.log("selected topping item: ("+toppingArray[j].value+")");
            // the text now equals "you ordered x topping line break"
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    // this sets the toppingcount equal to the size of the array selected topping
    var toppingCount = selectedTopping.length;
    // if topping count is greater than 1 
    if (toppingCount > 1) {
        // then set toppingtotal = to one
        toppingTotal = (toppingCount - 1);
    } else {
        // if it isn't greater than one then they selected no toppings
        toppingTotal = 0;
    }  getSauce(runningTotal,text1);


function getSauce(runningTotal,text1) {
    // sets sauce total equal to 0
    var sauceTotal = 0;
    // makes an empty array of selected sauce
    var selectedSauce =[];
    // sets the array equal to the sauces listed in the html
    var sauceArray = document.getElementsByClassName("sauces");
    // this is a for loop that sets j=0, then if j is less than the number of elements in the toppingarray, we add 1 to j and run the loop again
    for (var j=0; j < sauceArray.length; j++) {
        if (sauceArray[j].checked) {
            // this adds the selected sauce to the back of the array
            selectedSauce.push(sauceArray[j].value);
            // this string is said then it adds which sauce to the end of it
            console.log("selected sauce: ("+sauceArray[j].value+")");
            text1 = text1+sauceArray[j].value+"<br>";
            
        }
            
    }   
        // this sets the saucecount equal to the size of the array selected sauce
        var sauceCount = selectedSauce.length;
        // if sauce count is greater than 0
        if (sauceCount >  0) {
            // if true set saucecount = to 1 
            sauceTotal = (sauceCount = 1);
            if (sauceCount = 1) {
                // this adds one dollar to our running total
                runningTotal += 1;
            }
        } else {
            // if it isn't greater than 0 then they selected no sauces
            sauceTotal = 0;
        } 




    runningTotal = (runningTotal + toppingTotal);
    // we use a string and then say the selected items are the size of the array
    console.log("total selected topping items: " +toppingCount);
    console.log("total selected sauce choices:" + sauceCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("sauce text1: +"+text1);
    console.log("purchase total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>total: <strong>$"
        +runningTotal+".00"+"</strong></h3>";
    
    };
}


