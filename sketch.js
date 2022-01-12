
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;

var world;
var engine;
var solo;
var ball;
var parede1;
var parede2;

function setup() {
	createCanvas(1000,700);

	engine = Engine.create();
	world = engine.world;

  var propriedades_do_solo= {
	  isStatic: true
  }
 solo= Bodies.rectangle (0,700,2000,10,propriedades_do_solo); 
 World.add (world,solo);

 var propriedades_da_parede1= {
	 isStatic: true
 }
 parede1= Bodies.rectangle (700,700,20,200,propriedades_da_parede1);
 World.add (world,parede1);

 var propriedades_da_parede2= {
	isStatic: true
}
 parede2= Bodies.rectangle (900,700,20,200,propriedades_da_parede2);
 World.add (world,parede2);

 var propriedades_do_ball= {
	isStatic:false, 
	restitution:0.3, 
	friction:0, 
	density:1.2
 }
 ball= Bodies.circle (260,100,30,propriedades_do_ball);
 World.add (world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update (engine);
  rect (solo.position.x,solo.position.y,2000,10);

  rect (parede1.position.x,parede1.position.y,20,200);

  rect (parede2.position.x,parede2.position.y,20,200);

  ellipse (ball.position.x,ball.position.y,30);
}

function keyPressed () {
  if (keyCode== UP_ARROW) {
	  Matter.Body.applyForce (ball,ball.position,{x:80,y:-80});
  }
}

