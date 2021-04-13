var SpiderMan , SpiderManImg;
var Mysterio , MysterioImg;
var LondonBridge , LondonBridgeImg;
var Laser , LaserImg;

function preload()
{
  SpiderManImg = loadImage("IMAGES/SPIDER-MAN MCU.png");
	MysterioImg = loadImage("IMAGES/Mysterio.png");
  LondonBridgeImg = loadImage("IMAGES/LONDON BRIDGE.png");
  LaserImg = loadImage("IMAGES/LASERS.png");
}

function setup() {
createCanvas(800, 700);
SpiderMan = createSprite(130,100 , 50,50);
SpiderMan.addImage(SpiderManImg);
SpiderMan.scale=0.1;

Mysterio = createSprite(398,120 , 50,50);
Mysterio.addImage(MysterioImg);
Mysterio.scale=0.2;

LondonBridge = createSprite(400,280 , 50,50);
LondonBridge.addImage(LondonBridgeImg);
LondonBridge.scale=0.6;
}


function draw() {
  background("BLUE");
  if(keyDown(RIGHT_ARROW)){
    SpiderMan.velocityX = 2;
  }
  if(keyDown(LEFT_ARROW)){
    SpiderMan.velocityX = -2;
  }
  if(keyDown(UP_ARROW)){
    SpiderMan.velocityY = -2;
  }
  if(keyDown(DOWN_ARROW)){
    SpiderMan.velocityY = 2;
  }	
  if(SpiderMan.isTouching(Mysterio)){
    textSize(17 , 24);
    text("GAME OVER", 200, 200);
  }
  drawSprites();
 
}