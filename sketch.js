function setup() {
  createCanvas(800,400);
  
  var log = createSprite(9,240,20,300);
      log.shapeColor = "burlywood";

  var wall = createSprite(57,255,75,270);
      wall.shapeColor = "lightsteelblue";

  var barrier = createSprite(195,300,200,200);
      barrier.shapeColor = "lightsteelblue";

  var barrier1 = createSprite(198*2,300,200,300);
      barrier1.shapeColor = "lightsteelblue";

  var barrier2 = createSprite(199*3,300,200,200);
      barrier2.shapeColor = "lightsteelblue";
  
  var ground = createSprite(400, 400, 800, 20);
      ground.shapeColor = "lawngreen";
          
  var wall = createSprite(184*4,255,75,270);
      wall.shapeColor = "lightsteelblue";
  
  var log = createSprite(792,240,35,300);
      log.shapeColor = "burlywood";
}

function draw() {
  background(0);  

  drawSprites();
}