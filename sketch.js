const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,stand,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,sling,seige,pos;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  b1 = new Block(605,235,30,30,"blue");
  b2 = new Block(635,235,30,30,"blue");
  b3 = new Block(665,235,30,30,"blue");
  b4 = new Block(695,235,30,30,"blue");
  b5 = new Block(620,205,30,30,"red");
  b6 = new Block(650,205,30,30,"red");
  b7 = new Block(680,205,30,30,"red");
  b8 = new Block(635,175,30,30,(225,192,203));
  b9 = new Block(665,175,30,30,(225,192,203));
  b10 = new Block(650,145,30,30,(185,241,92));

  ground = new Ground(400,395,800,10);

  stand = new Ground(650,275,150,10);

  seige = new Seige(200,150,25);

  sling = new SlingShot(seige.body,{x: 200 , y: 150});

  Engine.run(engine);  
}

function draw() {
  Engine.update(engine);
  background("black");  

  ground.display();
  stand.display();
  seige.display();
  sling.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
}

function mouseDragged() {
  Matter.Body.setPosition(seige.body,{x: mouseX , y: mouseY});
}

function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if(keyCode == 32){
    sling.attach(seige.body);
  }
}