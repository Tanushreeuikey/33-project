const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg;
var penguinImg,penguin,snoww;
var snowImg,snowImg2;
var snow=[]
function preload()
{
   bgImg=loadImage("images/snow1.png")
   penguin_Img=loadAnimation("images/penguin.png","images/cuteanimals_penguin2.png")
   snowImg=loadImage("snow4.webp")
   snowImg2=loadImage("snow4.webp")
}

function setup() 
{
  createCanvas(1200,700);
  engine = Engine.create();
	world = engine.world;

  penguin=createSprite(1000, 570, 50, 50);
 penguin.addAnimation("happy",penguin_Img)
 penguin.scale=0.50

 //snow= new Snow
 
  

   Engine.run(engine)
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  rectMode(CENTER)

  rand = Math.round(random(1,4))

  if(frameCount%30===0)
  {
      for(var i=0;i<100;i++)
      {
         snow.push(new Snow())
      }
  }
  
//snow.display()
  for(var i=0;i<snow.length;i++)
  {
      snow[i].display()
  }

  drawSprites();
}