var sprite,target;
function setup() {
  createCanvas(400, 400);
  
  sprite= createSprite(200,150,50,50);
  target= createSprite(250,200,60,60);
 
}

function draw() {
   background(220);
   sprite.x=World.mouseX;
   sprite.y= World.mouseY;
  
  if(sprite.isTouching(target)){
    sprite.shapeColor="red";
  }else{
    sprite.shapeColor="yellow";
  }
  
  drawSprites();
}