var Ball = new function () {
    this.radius = 5;
    this.xCoord = 300;
    this.yCoord = 300;
    this.color = "blue";
    this.xDirection = 1;
    this.yDirection = 1;

    this.drawBall = function () {
         ctx.strokeStyle = this.color;
         ctx.beginPath();
         ctx.arc(this.xCoord, this.yCoord, this.radius, 0, 2*Math.PI);
         ctx.stroke();
         ctx.fillStyle = this.color;
         ctx.fill();
    }

    this.moveBall = function () {
        this.xCoord += this.xDirection;
        this.yCoord += this.yDirection;

        this.drawBall();
    }

    this.xCollision = function () {
        this.xDirection = this.xDirection*-1;
    }

    this.yCollision = function () {
        this.yDirection = this.yDirection*-1;
    }
}