var sun;
var sunr = 40;
var planet = [];

function setup() {
  createCanvas(1600,900);
  sun = createSprite(800, 450, 1, 1);
  sun.setCollider("circle",0,0,sunr);
  sun.debug = true;
  planet.push(new Planet(800,335.5,20,10,5));
  planet.push(new Planet(800,164,40,5,1));
  frameRate(40);
}

function draw() {
  background("black");
  drawSprites();
  for(var i = 0; i < planet.length; i++){
    planet[i].collision();
  }
  if(frameCount%1 === 0 && planet.length > 0){
    sunr += 1;
  }
  sun.setCollider("circle",0,0,sunr);
  center();
}

function center(){
  stroke("white")
  line(0,450,1600,450);
  line(800,0,800,900);
}