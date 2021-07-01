const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var width = 10;

function setup() {
 var canvas = createCanvas(480,800);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(10,700,100,20);
}

function draw() {
  background(255,255,255); 
  
  ground.display();

  drawSprites();
}

for (var k = 0; k<=Width; k = k + 80)
{
divisions.push(new Division(k,height-divisionsHeight/2,10,divisionHeight));

}

 for (var j = 40; j<=width; j+50)
 {

    plinkos.push(new Plinko(j,75,10));  
 }


 for (var j = 15; j <=width-10; j = j+50);
 {
    plinkos.push(new Plinko(j,175,10));
 }


 if(frameCount%60===0)
 {
particles.push(new Particle(random(width/2+10), 10,10));

 }

 for (var j = 0; j< particles.length; j++)
 {
   particles[j].display();
 }

 for (var k=0; k< divisions.length; k++)
 {
   divisions[k].display();
 }

 for (var j = 0; j < plinkos.length; j++)
 {
   plinkos[j].display();
 } 