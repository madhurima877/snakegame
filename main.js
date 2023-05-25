const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

class SnakeGame{
    constructor(ctx,width,height,noOfColumns,noOfRows){
        this.ctx=ctx;
        this.ctx.canvas.width=width;
        this.ctx.canvas.height=height;
        this.noOfColumns=noOfColumns;
        this.noOfRows=noOfRows;
        this.columnSize=width/noOfColumns;
        this.rowSize=height/noOfRows;
        this.direction="left";
        this.snakeCoordinates=[{x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6}];
    }

    drawBackground(color="yellow"){
this.ctx.fillStyle = color;
this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
    }
   drawBlock(x,y,color="red"){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x*this.columnSize,y*this.rowSize,x+1*this.columnSize,
        y+1*this.rowSize);
   }
   drawSnake(){
    for(const coordinate of this.snakeCoordinates )
    {
        this.drawBlock(coordinate.x,coordinate.y);
    }
   }
   moveSnake(){
    const head=Object.assign({},this.snakeCoordinates[this.snakeCoordinates.length-1]);
    this.snakeCoordinates.shift();
   if(this.direction=="left"){
    head.x-=1;
    if(head.x==-1){
        head.x=this.noOfColumns-1;
    }
   }
   this.snakeCoordinates.push(head);
   } 
   start(){
    const interval=setInterval(()=>{
        this.drawBackground();
        this.drawSnake();
        this.moveSnake();
    },500);
   }

}
const snakeGame=new SnakeGame(ctx,600,600,20,20);
snakeGame.start();