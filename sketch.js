
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbin

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	dustbin = new Dustbin(500,600,150,175)
	paper = new Paper(200,100,70);
	ground = new Ground(300,height,700,20);

	slingshot = new Slingshot(paper.body,{x:100, y:100})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  dustbin.display();
  slingshot.display();
  
  
  drawSprites();
 
}

/*function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		
	}
}
*/


function mouseDragged() {
    Body.setPosition(paper.body, {x:mouseX , y:mouseY })
}

function mouseReleased() {
    slingshot.fly()
}

