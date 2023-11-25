function con() { // this will combine all these strings 
    var a = "hi ";
    var b = "my name ";
    var c = "is ";
    var d = "scott ";

    var whole_sentence = a.concat(b,c,d);

    document.getElementById("concat").innerHTML = whole_sentence;
}

function slice_method() {
    var sentence = "the sun is going down";
    var section = sentence.slice(4,8); // this isolates sun 
    document.getElementById("slice").innerHTML = section;

}

function upcase() {
    var text = document.getElementById("upper").innerHTML //this sets the text in this id to a variable 
    document.getElementById("upper").innerHTML = text.toUpperCase(); // we then make it uppercase 
}

function search_test() {
    var text = document.getElementById("search").innerHTML;
    document.getElementById("search").innerHTML = text.search("i"); // note this is case-sensitive.
    

}

function string_method() {
    var x = 10;
    document.getElementById("nts").innerHTML = x.toString();
}

function precision_method() {
    var x = 12345678910; // this will shrink the number down so its displayed even shorter but still maintaining the number 
    document.getElementById("pre").innerHTML = x.toPrecision(1);
}

function fixed() {
    var x = 1.234; 
    document.getElementById("fixed").innerHTML= x.toFixed(2); //this takes the 2 numbers after the decimal 
}

function valueoftest() {
    var x = 5; //here it'll display 5 
    document.getElementById("valueof").innerHTML = x.valueOf();
}