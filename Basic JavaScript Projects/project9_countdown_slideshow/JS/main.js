let slideindex = 1
showslides(slideindex);

// next controls and previous 
function plusslides(n) { //plussides takes a parameter 
    showslides(slideindex += n); // show slides takes the slide index adding  value of  n 

}

// thumbnail image controls
function currentslide(n) { //currentslide  takes a parameter 
    showslides(slideindex = n); // this sets the value of slideindex equal to n 
}

function showslides(n) {
let i; // we save this variable for later
let slides = document.getElementsByClassName("myslides"); //this variable selects the class in our html  
let dots = document.getElementsByClassName("dot"); // this variable stores the class we set up in css

if (n > slides.length) {slideindex = 1} // if n is greater than the slide length then the slide index is equal to one 
if (n <  1) {slideindex = slides.length} // if n is less than 1 then slideindex = slides.length
for (i = 0; i < slides.length; i++) { //i is set equal to 0 at the begining of the for loop. then if i is less than slides.length we add 1 to i
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) { // i is set equal to 0 then if i is less than dots.length we add 1 to i
    dots[i].className = dots[i].className.replace ( " active", "");
}
slides[slideindex-1].style.display = "block";
dots[slideindex-1].className += " active";


}

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("time's up!");
            clearTimeout(time);
            time.innerHTML = "";
        }
    
    }
    tick();




}