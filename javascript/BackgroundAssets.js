var BackgroundAssets = new function (){

    this.drawBackground = function() {
        this.clearBackground();
        this.drawCentre();
        this.displayScore();
    }

    this.clearBackground = function() {
        ctx.fillStyle="white";
        ctx.fillRect(0,0, canvas.width, canvas.height);
    }

    this.drawCentre = function () {
        //Creates multicolour line
        var gradient=ctx.createLinearGradient(0, canvas.height/2,canvas.width,0);
        gradient.addColorStop("0.1","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("0.8","red");

        // Draw the line with the gradient
        ctx.strokeStyle=gradient;
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(0,canvas.height/2);
        ctx.lineTo(canvas.width,canvas.height/2);
        ctx.stroke();
    }

    this.displayScore = function() {
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "left";
        ctx.fillText(score + " vs " + score, 0, canvas.height/2);
    }
}