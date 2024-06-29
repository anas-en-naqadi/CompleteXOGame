let firstClick = true;
let id= 0;
let X = "";
let O = "";
let firstPlayerMark = "";
function checkClick(value){
    id = value ;
    const myButton = document.getElementById(id.toString());
    myButton.innerHTML = '';
    if (firstClick == true) {
       
        // Create a new span element
        const xSpan = document.createElement("span");
        
        // Set the text content of the span to "X"
        xSpan.textContent = firstPlayerMark;
       
        // Append the span to the button
        myButton.appendChild(xSpan);
        
        // Set the firstClick flag to false
        firstClick = false;
    }else{
        // Create a new span element
        const xSpan = document.createElement("span");
        
        // Set the text content of the span to "X"
        xSpan.textContent = firstPlayerMark ==="X" ? "O" : "X";
       
        // Append the span to the button
        myButton.appendChild(xSpan);
        
        // Set the firstClick flag to false
        firstClick = true;
    }
checkWinnerX();

    
}

function checkWinnerX(){


if (document.getElementById("1").textContent == "X" && document.getElementById("5").textContent == "X" && document.getElementById("9").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("1").textContent == "X" && document.getElementById("4").textContent == "X" && document.getElementById("7").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("2").textContent == "X" && document.getElementById("5").textContent == "X" && document.getElementById("8").textContent == "X") {
    document.getElementById("player1").style.display = "block";
    document.getElementById("player1").textContent = X+" wins ";
} else if (document.getElementById("3").textContent == "X" && document.getElementById("6").textContent == "X" && document.getElementById("9").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("1").textContent == "X" && document.getElementById("2").textContent == "X" && document.getElementById("3").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("4").textContent == "X" && document.getElementById("5").textContent == "X" && document.getElementById("6").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("7").textContent == "X" && document.getElementById("8").textContent == "X" && document.getElementById("9").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins w";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("3").textContent == "X" && document.getElementById("5").textContent == "X" && document.getElementById("7").textContent == "X") {
    document.getElementById("player1").textContent = X+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("1").textContent == "O" && document.getElementById("5").textContent == "O" && document.getElementById("9").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("1").textContent == "O" && document.getElementById("4").textContent == "O" && document.getElementById("7").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("2").textContent == "O" && document.getElementById("5").textContent == "O" && document.getElementById("8").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("3").textContent == "O" && document.getElementById("6").textContent == "O" && document.getElementById("9").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("1").textContent == "O" && document.getElementById("2").textContent == "O" && document.getElementById("3").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("4").textContent == "O" && document.getElementById("5").textContent == "O" && document.getElementById("6").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("7").textContent == "O" && document.getElementById("8").textContent == "O" && document.getElementById("9").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
} else if (document.getElementById("3").textContent == "O" && document.getElementById("5").textContent == "O" && document.getElementById("7").textContent == "O") {
    document.getElementById("player1").textContent = O+" wins ";
    document.getElementById("player1").style.display = "block";
}

                                   
}
// Flag to keep track of whether the first click has occurred

function resetAll(){
    document.getElementById("Begining").style.display ="block";
    document.getElementsByClassName("container")[0].style.display ="none";
    document.getElementById("reset").style.display ="none";
    document.getElementById("1").textContent = "";
    document.getElementById("2").textContent = "";
    document.getElementById("3").textContent = "";
    document.getElementById("4").textContent = "";
    document.getElementById("5").textContent = "";
    document.getElementById("6").textContent = "";
    document.getElementById("7").textContent = "";
    document.getElementById("8").textContent = "";
    document.getElementById("9").textContent = "";
    document.getElementById("player1").style.display = "none";
    firstClick = true;
}
// Add a click event listener to the button

function onChoosePlayer(type){
    firstPlayerMark = type.toUpperCase();
if(type==="x"){
    X = "Player 1";
    O = "player 2";
   
}
if(type==="o")
    {
    X ="player 2"
    O="player 1"
    }
    document.getElementById("Begining").style.display ="none";
    document.getElementsByClassName("container")[0].style.display ="block";
    document.getElementById("reset").style.display ="block";


}