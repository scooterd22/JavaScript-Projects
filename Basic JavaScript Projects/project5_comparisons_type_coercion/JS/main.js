function coercion() {
    document.getElementById("coer").innerHTML = ("10" + 3);
}

function test_if_number_is_nan() {
    document.getElementById('nan').innerHTML = isNaN(5);
}

function check_if_number_is_negative_infinity() {
    document.getElementById('infinop').innerHTML = (-3E310);
}

function check_if_number_is_infinity() {
    document.getElementById('infini').innerHTML = (3E310);
    

} 

function true_and_false() {
    document.getElementById('tnf').innerHTML = (10>2) + ' and ' +  (10<2);
}

function consoletest() {
     console.log(2+2);


}

function consoletestbolean() {
    console.log(2>2);


}

function doubleequal() {
    document.getElementById('doubleq').innerHTML = (10==10) + ' and ' + (10==3);

}

function tripleequal() {
    document.getElementById('tripleq').innerHTML = ("10" === 10) + ' and ' + (10===10);
}

function andoperator() {
    document.getElementById('andop').innerHTML = (10>2 && 10<1) + ' and ' + (10>2 && 10>1);
}

function notoperator(){
    document.getElementById('notop').innerHTML = !(12>22) + ' and ' + !(45>10);

}

function oroperator() {
    document.getElementById('orop').innerHTML = (5>1) || (5<1);
}

function docwrite() {
    document.getElementById('docwrite').innerHTML = document.write(typeof "ten");
}