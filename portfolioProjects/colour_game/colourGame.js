var numSquares = 9
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

//mode button even listeners
function setUpModeButtons(){
    for(var i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            //removing "selected" class from all modes
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            //adding in selected class to the correct mode
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if(this.textContent === "Medium"){
                numSquares = 6;
            } else if(this.textContent === "Hard"){
                numSquares = 9;
            }
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColour = this.style.backgroundColor;
            //grab colour of clicked squares
            if(clickedColour === pickedColour){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
        //generate all new colours
        colours = generateRandomColours(numSquares);
        //pick a new colour for the colour array
        pickedColour = pickColour();
        //change colour display to matched picked colour
        colourDisplay.textContent = pickedColour;
        //reset H1 header, button and message
        h1.style.backgroundColor = "steelblue";
        resetButton.textContent = "New Colours";
        messageDisplay.textContent = "";
        
        //change colours of the squares
        for(var i = 0; i < squares.length; i++){
            if(colours[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colours[i];
            } else {
                squares[i].style.display = "none";
            }
        }
}

resetButton.addEventListener("click", function(){
    //generate all new colours
    colours = generateRandomColours(numSquares);
    //pick a new colour for the colour array
    pickedColour = pickColour();
    //change colour display to matched picked colour
    colourDisplay.textContent = pickedColour;
    //change colours of the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colours[i];
    }
    //reset H1 header, button and message
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
})

function changeColours(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor= color;
    }
}

function pickColour(){
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        //get random colours and push into arr
        arr.push(randomColour());
    }
    return arr;
}

function randomColour(){
    //pick colours (red gree blue) from 0 to 255
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    //return "rgb(255, 255, 255)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}