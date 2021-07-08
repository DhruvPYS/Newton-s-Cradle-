
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundx, bob1, bob2, bob3, bob4, bob5, chain1, chain2, chain3, chain4, chain5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundx = new Ground(400,50)
bob1 = new Bob(300, 300, 25)
bob2 = new Bob(350, 300, 25)
bob3 = new Bob(400, 300, 25)
bob4 = new Bob(450, 300, 25)
bob5 = new Bob(500, 300, 25)

chain1 = new Chain(bob1.body, groundx.body, -100,0)
chain2 = new Chain(bob2.body, groundx.body, -50,0)
chain3 = new Chain(bob3.body, groundx.body, 0,0)
chain4 = new Chain(bob4.body, groundx.body, 50,0)
chain5 = new Chain(bob5.body, groundx.body, 100,0)

	Engine.run(engine);
  
}


function draw() {
  background("white");
  groundx.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

rectMode(CENTER);

  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -750, y: 0})
}
}
