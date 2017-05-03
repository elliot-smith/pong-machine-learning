function Chromosome(player) {
    this.geneticCode= new LinkedList();
    this.player = player;
    this.fitness = 0;
}

Chromosome.prototype.randomMove = function() {
    return(Math.ceiling(Math.random()*3));
}


Chromosome.prototype.completeMove = function(option) {
    switch(option){
        case 0: player.moveRight = false;
                player.moveLeft = true;
                break;
        case 1: player.moveRight = false;
                player.moveLeft = false;
                break;
        case 2: player.moveRight = true;
                player.moveLeft = false;
                break;
    }
}

Chromosome.prototype.nextMove = function() {
    var move = this.randomMove()
    geneticCode.add(move);
    this.completeMove(move);
    fitness++;
}