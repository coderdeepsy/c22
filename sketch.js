const Engine=Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine, world
var ball
var ground

function setup() {
  createCanvas(800,400);
engine= Engine.create()
world= engine.world
//object= Bodies.rectangle(200,100,50,50)
//World.add(world,object)
var ball_options={
  restitution:0.5
}
ball = Bodies.circle(200,100,20, ball_options)
World.add(world, ball)
var options={
  isStatic: true
}
ground=Bodies.rectangle(200,390,800,20,options)
World.add(world, ground)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  //rect (object.position.x,object.position.y, 500, 20)
  rect (ground.position.x,ground.position.y, 1200, 20)  
  ellipse(ball.position.x, ball.position.y,20,20)
  drawSprites();
}