var astronaut;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleeping", sleep);
}


function preload(){
bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym21.png","images/gym22.png");
eat=loadAnimation("images/eat.png");
drink=loadAnimation("images/drink.png");
move=loadAnimation("images/move.png");
}

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}


function draw() {
  background(255,255,255);  
  drawSprites();
}