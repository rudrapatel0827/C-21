var fixedRect, movingRect;
var car, wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,300,50,50);
  car.shapeColor="lightblue";
  wall=createSprite(1000,300,30,200)
  wall.shapeColor="white";
  car.velocityX=5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(car,wall)){
  car.velocityX=0
  car.shapeColor="pink"
  wall.shapeColor="darkblue"
  wall.velocityY=-3
}
  
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true
    }
else {
return false
}
}