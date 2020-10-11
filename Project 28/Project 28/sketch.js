
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, boy, boy_img, stone, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, launcher;

function preload(){
	boy_img = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(100,560,200,100);
	boy.addImage(boy_img);
	boy.scale = 0.1;
	tree = new Tree();
	ground = new Ground();
	stone = new Stone();
	launcher = new Launcher(stone.body,{x:50,y:510})
	mango1 = new Mango(400,350);
	mango2 = new Mango(480,250);
	mango3 = new Mango(560,300);
	mango4 = new Mango(640,250);
	mango5 = new Mango(720,350);
	mango6 = new Mango(500,350);
	mango7 = new Mango(580,200);
	mango8 = new Mango(630,325);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  background(255);
  
  drawSprites();
  boy.display();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  fill("black");
  text("Press space to get another chance!", 350, 100);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:50, y:510}) ;
	    launcher.attach(stone.body);
	}
}

function detectCollision(lstone, lmango){
	stonePosition = lstone.body.position;
	mangoPosition = lmango.body.position;

	var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
	if(distance <= 45){
		Matter.Body.setStatic(lmango.body, false);
	}
}