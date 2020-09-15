var ball,img,paddle;
var ballimg,paddleimg;

function preload() {
  ballimg = loadImage("cloud.png");
  paddleimg=loadImage("obstacle1.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage("a",ballimg); 
  ball.velocityX=-9;  
  ball.scale = 0.5;
  paddle=createSprite(350,200,20,100);
  paddle.addImage("b",paddleimg);
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
 
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
 // paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=3;
  }
  
  //text("FPS:" + Math.round(getframeRate), 50,50);
  
  drawSprites();
  
}