var human;
var invisibleGround;
var ground;
var tap;

function preload(){

}

function setup() {
  createCanvas(1600,400);
  human = createSprite(100, 200, 50, 50);

  invisibleGround = createSprite(800,350,1800,25);
  invisibleGround.visible = false;
  
  ground = createSprite(800,350,1800,25);

  tap = createSprite(480,330,35,35);

}

function draw() {
  background(255,255,255);  
  
  if(human.isTouching(invisibleGround)){
    human.collide(invisibleGround)
  }

  if(keyDown("RIGHT")){
    human.velocityX = 6
  }

  if(human.y>290&&keyWentDown("UP")){
    human.velocityY = -10
  }
  console.log(human.x);
  
  if(human.x === 400){
    human.velocityX = 0;
    text("Press Space To Close The Tap",450,125);
    text("Or Press The Right Arrow To Continue",450,160);
  }

  camera.position.x = human.x;

  human.velocityY = human.velocityY+0.5;


  drawSprites();

  
}