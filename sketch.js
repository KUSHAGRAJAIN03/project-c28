var helicopterSprite, ballSprite,packageIMG;
var packageBody,ground
//var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//ballIMG=loadImage("images/paper.png");
}

function setup() {
	createCanvas(800, 700);

//	ballSprite=createSprite(300,200, 10,10);

    
	groundSprite=createSprite(width/2, 600, width,10);
	groundSprite.shapeColor=color("yellow")

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	//ball = Bodies.circle(100,200,20,options,0);
	//image(ballIMG,100,200,10,10);

	//World.add(world,ball);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	fill("yellow");
	 World.add(world,ground);

	b2=new barrier(500,600,20,100);   //b=barrier
	b3=new barrier(700,600,20,100);
	b1=new barrier(600,650,200,20);
	db1=new db(500,450,200,200);
	ball1=new Ball(100,200);

	Launcher = new launcher(ball1.body,{x:100,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");

 // ballSprite.x= ball.position.x ;
 // ballSprite.y= ball.position.y ;
 // ellipseMode(RADIUS);

 // ellipse(ball.position.x,ball.position.y,20,20);

  rect(ground.position.x,ground.position.y,800,10);

 // b1.display();
 // b2.display();
 // b3.display();
  ball1.display();
  db1.display();
  
  //drawSprites();
 
}
 

function mouseDragged() {
	// bird.body.position.x=mouseX;
	// bird.body.position.y=mouseY;
	Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased() {
	Launcher.fly();
 }