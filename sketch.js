const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backroundImg;
var maxSnow = 100;
var snow = []

function preload(){
  backroundImg = loadImage("snow3.jpg")
  }
  

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

 // engine = Engine.create();
  //world = engine.world;
}


function draw() {
  background(backroundImg);

//rand = Math.round(random(1,4));

  drawSprites();

  if (frameCount%60 === 0){
    snow.push(new Snow(random(width/2-10, width/2+10), 10, 10))
    score++
  }

backroundImg.display();
for (var h = 0; h < snow.length; h++) {
  snow[h].display();
}

}