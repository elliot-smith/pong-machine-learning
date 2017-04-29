function Paddle (xCoord, yCoord) {
    this.width = 50;
    this.height = 5;
    this.yCoord = yCoord;
    this.xCoord = xCoord;
    this.moveRight = false;
    this.moveLeft = false;
}

Paddle.prototype.drawPaddle = function() {
    ctx.fillStyle="black";
    ctx.fillRect(this.xCoord, this.yCoord, this.width, this.height);
};

Paddle.prototype.changeLeft = function(moveLeft) {
    this.moveLeft = moveLeft;
    this.moveRight = false;
};

Paddle.prototype.changeRight = function(moveRight) {
    this.moveLeft = false;
    this.moveRight = moveRight;
};

Paddle.prototype.updateXCoord = function() {
    if (this.moveLeft &&) {
            this.xCoord -= 5;
        if (this.xCoord > 0){
            this.xCoord = 0;
        }
    } else if (this.moveRight) {
        this.xCoord += 5;
        if (this.xCoord < PADDLEMAXRIGHT) {
            this.xCoord +=5;
        }
    }
};
