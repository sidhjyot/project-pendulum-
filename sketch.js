var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof1,bobDiameter;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,500,1);
	bob2 = new Bob(350,500,5);
	bob3 = new Bob(300,500,5);
	bob4 = new Bob(450,500,5);
	bob5 = new Bob(500,500,5);

	roof1 = new Roof (400,100,600,30);

                           

	string1= new Strings(bob1.body,roof1.body,-bobDiameter*2,0);
	string2= new Strings(bob2.body,roof1.body,-bobDiameter*2,0);
	string3= new Strings(bob3.body,roof1.body,-bobDiameter*2,0);
	string4= new Strings(bob4.body,roof1.body,-bobDiameter*2,0);
	string5= new Strings(bob5.body,roof1.body,-bobDiameter*2,0);
   
	
	Engine.run(engine);
  
}


function draw() {    
  rectMode(CENTER);
  background(255);
  string1.display();
  /*string2.display();
  string3.display();
  string4.display();
  string5.display();*/
  
  bob1.display();
  bob5.display();
  bob4.display();
  bob3.display(); 
  bob2.display();

  roof1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:85,y:-85});
		
	}
	
}



