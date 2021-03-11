
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball
var wall1,wall2,wall3

function preload()
{
	
}

function setup() {
	var canvas= createCanvas(1000,200);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40)
    ball = new Ball(300,20,50,50)
    wall1 = new Wall(790,100,190,20)
    wall2= new Wall(720,80,20,100)
    wall3= new Wall(910,80,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
 
}



