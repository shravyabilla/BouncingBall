//NAMESPACING
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //creating engine and adding world to it
  engine = Engine.create();
  world = engine.world;

  //updating property - JSON format
  var options={
    isStatic:true
  }

  //creating a body
  ground = Bodies.rectangle(200,390,400,20,options);

  //add to the world
  World.add(world,ground);
  
  var ballOptions={
    restitution:1
  }

  ball = Bodies.circle(200,100,20,ballOptions);

  World.add(world,ball);

}

function draw() {
  background(0);  

  //update the engine - repeatedly updates x & y value
  Engine.update(engine);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}