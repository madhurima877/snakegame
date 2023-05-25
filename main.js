const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

class SnakeGame{
    constructor(ctx,width,height){
        this.ctx=ctx;
    }

    drawBackground(color="yellow"){
this.ctx.fillStyle=color;
this.ctx.fillRectangle(0,0,600,600)
    }
}
const snakeGame=new SnakeGame(ctx,600,600);
snakeGame.drawBackground();