var CollisionDetection = new function (){

    this.ballCollision = function () {
        this.sideWallCollision();
        this.paddleCollision();
        this.endRoundCollision();
    }

    this.sideWallCollision = function () {
        if(Ball.xCoord >= RIGHTCOLLISION){
            Ball.xCollision();
        } else if(Ball.xCoord + Ball.radius <= LEFTCOLLISION){
            Ball.xCollision();
        }
    }

    this.paddleCollision = function () {
        if(Ball.yCoord === PLAYERONECOLLISIONY){
            if(Ball.xCoord >= playerOne.xCoord && Ball.xCoord <= playerOne.xCoord + playerOne.width){
                Ball.yCollision();
            }
        } else if(Ball.yCoord === PLAYERTWOCOLLISIONY){
            if(Ball.xCoord >= playerTwo.xCoord && Ball.xCoord <= playerTwo.xCoord + playerTwo.width){
                Ball.yCollision();
            }
        }
    }

    this.endRoundCollision = function () {
        if(Ball.yCoord + Ball.radius >= BOTTOMCOLLISION) {
            playRound = false;
            alert("collision bottom");
        } else if(Ball.yCoord <= TOPCOLLISION) {
            playRound = false;
            alert("collision top");
        }
    }
}