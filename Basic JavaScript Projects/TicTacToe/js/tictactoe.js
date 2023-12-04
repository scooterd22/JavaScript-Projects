// keeping track of whos turn it is
let activePlayer = 'x';
// this array stores an array of moves. we use to determine win conditions.
let selectedSquares = [];

// function for placing an x or o in a square.
function placeXOrO(squareNumber) {
    // this condition ensures a square hasnt been selected already
    // the .some() method checks each element of the selectsquare array
    // to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // this variable retrieves the html element id that was clicked on
        let select = document.getElementById(squareNumber);
        // this checks to see whos turn it is by seeing if the variable activeplayer is equal to the string x 
        if (activePlayer ==='x') { 
            // if the activeplayer is equal to 'x' then the png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            // if its not x then it has to be o so we use an else statement for the other part
        } else {
                // this is for the case of when activeplayer is equal to o 
                select.style.backgroundImage = 'url("images/o.png")';
            }
            //squarenumber and aactiveplayer are concatenated together and added to the array.
            selectedSquares.push(squareNumber + activePlayer);
            // this checks for any win conditions by calling this function
            checkWinConditions();
            // this condition is for changing the active player.
            if (activePlayer === 'x') {
                // if active player is x change it to o, here we use one equal because we are setting the value
                activePlayer = 'o';
                // if the active player is anything other than x we run this else
            } else {
                // change active player to x
                activePlayer = 'x';
            }
            // this plays a sound of when something is placed
            audio('./media/place.mp3');
            // checks to see if its computers turn
            if (activePlayer === 'o') {
                // disables clicking for computers turn
                disableClick();
                // waits one second before placing an image and enables click
                setTimeout(function () {computersTurn(); }, 1000);
            }
            // by returning true our computersturn function is able to work
            return true;
        }
        // this returns a random square being selected by the computer
        function computersTurn() {
            // bolean set for while loop
            let success = false;
            // it stores a random number form 0-8
            let pickASquare;
            // this conditions allows our while loop to keep trying if a square is selected already.
            while (!success) {
                // a random number between 0 and 8 is selected, floor is what makes it equal to a whole number since we use 9, 8 is the heighest we can have 
                pickASquare = String(Math.floor(Math.random() * 9));
                // if the random number is true the square hasn't been taken
                if (placeXOrO(pickASquare)){
                    // we call the function while success isn't true
                    placeXOrO(pickASquare);
                    // after calling it until it is true we set success equal to true.
                    success = true;
                };
            }
        }
    }
function checkWinConditions() {
    // here we say if the array includes all the x's or all the o's in winning combinations
    // then we draw a line to show where it occured 
    if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50, 100, 558, 100)}

    else if (arrayIncludes('3x', '4x', '5x')) {drawWinLine(50, 304, 558, 304)}

    else if (arrayIncludes('6x', '7x', '8x')) {drawWinLine(50, 508, 558, 508)}

    else if (arrayIncludes('0x', '3x', '6x')) {drawWinLine(100, 50,  100, 558)}

    else if (arrayIncludes('1x', '4x', '7x')) {drawWinLine(304, 50, 304, 558)}

    else if (arrayIncludes('2x', '5x', '8x')) {drawWinLine(508, 50, 508, 558)}

    else if (arrayIncludes('6x', '4x', '2x')) {drawWinLine(100, 508, 510, 90)}

    else if (arrayIncludes('0x', '4x', '8x')) {drawWinLine(100, 100, 520, 520)}

    else if (arrayIncludes('0o', '1o', '2o')) {drawWinLine(50, 100, 558, 100)}

    else if (arrayIncludes('3o', '4o', '5o')) {drawWinLine(50, 304, 558, 304)}

    else if (arrayIncludes('6o', '7o', '8o')) {drawWinLine(50, 508, 558, 508)}

    else if (arrayIncludes('0o', '3o', '6o')) {drawWinLine(100, 50,  100, 558)}

    else if (arrayIncludes('1o', '4o', '7o')) {drawWinLine(304, 50, 304, 558)}

    else if (arrayIncludes('2o', '5o', '8o')) {drawWinLine(508, 50, 508, 558)}

    else if (arrayIncludes('6o', '4o', '2o')) {drawWinLine(100, 508, 510, 90)}

    else if (arrayIncludes('0o', '4o', '8o')) {drawWinLine(100, 100, 520, 520)}
    // if none of the conditions above are true then this checks for a tie
    else if (selectedSquares.length >= 9) {
        // plays tie game sound
        audio('./media/tie.mp3');
        // .3 second before the game resets after the tie
        setTimeout(function () { resetGame(); }, 500);
    }
    // this function checks if an array includes 3 strings.
    // it checks for each win con
    function arrayIncludes(squareA, squareB, squareC) {
        // these three variables check for three in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the three variables passed are included in the array
        // then true is returned and our else if executes the drawLine() function
        if (a === true && b === true && c === true) {return true;}
    }
}




// makes body element temporarily unclickable
function disableClick() {
    // body unclickable
    body.style.pointerEvents = 'none';
    // clickable after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// takes string paramter of the path for placement sound
function audio(audioURL) {
    // pass audio object the path as a parameter
    let audio = new Audio(audioURL);
    // play method plays the sound
    audio.play();
}


// Utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // accessing our html canvas
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    // indicates where the start of a lines x axis is
    let x1 = coordX1,
        // start of a lines y axis is
        y1 = coordY1,
        // where the end of a lines x axis is
        x2 = coordX2,
        // where the end of a lines y axis is
        y2 = coordY2,
        // this variable stores temp x axis data when animation loop gets updated
        x = x1,
        //  this does the same for y data ^^
        y = y1;

    function animateLineDrawing() {
        // variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // clears the content from last iteration
        c.clearRect(0, 0, 608, 608);
        // starts a new path
        c.beginPath();
        // moves us to a starting point in our line
        c.moveTo(x1, y1);
        // indicates the end point
        c.lineTo(x, y);
        // sets line width
        c.lineWidth = 10;
        // sets the color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8';
        // draws everything we laid out above
        c.stroke();
        // this condition checks if we've reached the end points
        if (x1 <= x2 && y1 <= y2) {
            // adds 10 to previous end point
            if (x < x2) { x += 10; }
            // adds 10 to previous y endpoint
            if (y < y2) { y += 10; }
            // condition below needed for 6,4,2 win condition
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        // also needed for 6,4,2 win con
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2 ) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);} 
        }
    }
    // function clears canvas after winline is drawn
    function clear() {
        // starts our loop
        const animationLoop = requestAnimationFrame(clear);
        // clears canvas
        c.clearRect(0, 0, 608, 608);
        // stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    // this stops clicking while the win sound is playing
    disableClick();
    // plays win audio
    audio('./media/winGame.mp3');
    // calls main animation loop
    animateLineDrawing();
    // this line waits 1 second then clears the canvas, resets the game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

// reset game function
function resetGame() {
    // this loop goes through each html square element
    for (let i=0; i < 9; i++) {
        // this variable ge5ts the html element i
        let square = document.getElementById(String(i));
        // removes background image
        square.style.backgroundImage = '';
    }
    // resets the array so it can start over
    selectedSquares = [];

}

