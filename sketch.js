var hr,mn,sc,hrAngle,minAngle,secAngle;
var numbers,numImg;


function preload(){
  numImg = loadImage("clock.png");
}
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

  numbers = createSprite(-1,5,300,300);
  numbers.addImage(numImg);
  numbers.scale = 1.3
}

function draw() {
  background("yellow"); 
  translate (200,200)
  rotate(-90);

  hr = hour();
mn = minute();
sc = second();

hrAngle = map(hr % 12,0,12,0,360)
minAngle = map(mn,0,60,0,360);
secAngle = map(sc,0,60,0,360);


strokeWeight(7);
noFill();
arc(0,0,310,310,0,secAngle);
noStroke();
arc(0,0,290,290,0,minAngle);
noStroke();
arc(0,0,260,260,0,hrAngle);
stroke("blue");

push();
rotate(secAngle);
strokeWeight(7);
stroke("black");
line(0,0,110,0);
pop();

push();
rotate(minAngle);
strokeWeight(7);
stroke("black");
line(0,0,80,0);
pop();

push();
rotate(hrAngle);
strokeWeight(7);
stroke("blue");
line(0,0,50,0);
pop();


  drawSprites();
}