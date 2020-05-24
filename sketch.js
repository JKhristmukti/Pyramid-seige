const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,stand,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,sling,seige;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  b1 = new Block(605,235,30,30,"blue");
  b2 = new Block(635,235,30,30,"blue");
  b3 = new Block(695,235,30,30,"blue");
  b4 = new Block(725,235,30,30,"blue");
  b5 = new Block(620,265,30,30,"red");
  b6 = new Block(650,265,30,30,"red");
  b7 = new Block(670,265,30,30,"red");
  b8 = new Block(635,295,30,30,(225,192,203));
  b9 = new Block(695,295,30,30,(225,192,203));
  b10 = new Block(650,325,30,30,(185,241,92));

  ground = new Ground(400,200,800,400);

  stand = new Ground(650,275,150,10);

  seige=Matter.Bodies.circle(200,150,20,{'restitution':0.8,'friction':1.0,'density':1.0})
  World.add(world,seige.body);

  sling = new SlingShot(seige.body,{x: 200 , y: 300});

  Engine.run(engine);  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  

  ground.display();
  stand.display();
  var pos=seige.body.position;
  ellipse(pos.x,pos.y,20);
  sling.display();

}
function mousePressed() {
  Matter.Body.setPosition(seige.body,{x: mouseX , y: mouseY});
}
function mouseReleased() {
  sling.fly();
}