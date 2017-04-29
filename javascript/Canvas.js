var canvas = document.getElementById("pongCanvas");
var ctx = canvas.getContext("2d");

var PLAYERDISTANCEFROMEDGE = 10;

var PLAYERONEY = PLAYERDISTANCEFROMEDGE;
var PLAYERONECOLLISIONY = PLAYERONEY + Ball.radius;

var PLAYERTWOY = canvas.height - PLAYERDISTANCEFROMEDGE;
var PLAYERTWOCOLLISIONY = PLAYERTWOY - Ball.radius;

var TOPCOLLISION = Ball.radius + 0;
var RIGHTCOLLISION = canvas.width;
var BOTTOMCOLLISION = canvas.height;
var LEFTCOLLISION = Ball.radius;
var PADDLEMAXRIGHT = canvas.width + this.width;

var playerOne = new Paddle(canvas.width/2, PLAYERONEY);
var playerTwo = new Paddle(canvas.width/2, PLAYERTWOY);
var score = 2;
var playRound = true;


console.log(PLAYERTWOCOLLISIONY);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        playerTwo.changeRight(true);
    }
    else if(e.keyCode == 37) {
        playerTwo.changeLeft(true);
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        playerTwo.changeRight(false);
    }
    else if(e.keyCode == 37) {
        playerTwo.changeLeft(false);
    }
}


function drawBallAndPlayers() {
    playerOne.updateXCoord()
    playerOne.drawPaddle();
    playerTwo.updateXCoord()
    playerTwo.drawPaddle();

    Ball.moveBall();
}



drawBallAndPlayers();
BackgroundAssets.drawBackground();


function startRound() {
    BackgroundAssets.drawBackground();
    drawBallAndPlayers();

    CollisionDetection.ballCollision();
    if(playRound == true){
        requestAnimationFrame(startRound);
    }
}

startRound();