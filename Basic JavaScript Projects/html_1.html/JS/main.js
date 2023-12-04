const myCanvas = document.getElementById("canvasdrawing");
const ctx = myCanvas.getContext("2d"); 

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "pink");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);


function class_func() {
    var a = document.getElementsByClassName("classfunc"); 
    a[1].innerHTML = "all i am is changed text";
}

