
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1536, 700);


	engine = Engine.create();
	world = engine.world;


	

  
 
  ball= new Ball(200,300,70)
  box1 = new Yellowbox(937,245,60,60)
  box2 = new Yellowbox(998,245,60,60)
  box3 = new Yellowbox(1059,245,60,60)

  box4 = new Greenbox(1000,365,60,60)
  box5 = new Greenbox(1061,365,60,60)
  box6 = new Greenbox(939,365,60,60)
  box7 = new Greenbox(1122,365,60,60)
  box8 = new Greenbox(878,365,60,60)

  box9 = new Bluebox(907,305,60,60)
  box10 = new Bluebox(968,305,60,60)
  box11 = new Bluebox(1029,305,60,60)
  box12 = new Bluebox(1090,305,60,60)
  
  box13 = new Redbox(968,185,60,60)
  box14 = new Redbox(1029,185,60,60)

  box15 = new Limebox(1000,125,60,60)
  
  box16 = new Greenbox(500,515,60,60)
  box17 = new Greenbox(622,515,60,60)
  box18 = new Greenbox(378,515,60,60)
  box19 = new Greenbox(561,515,60,60)
  box20 = new Greenbox(439,515,60,60)

  box21 = new Bluebox(409,455,60,60)
  box22 = new Bluebox(470,455,60,60)
  box23 = new Bluebox(531,455,60,60)
  box24 = new Bluebox(592,455,60,60)

  box25 = new Yellowbox(440,395,60,60)
  box26 = new Yellowbox(501,395,60,60)
  box27 = new Yellowbox(562,395,60,60)

  box28 = new Redbox(470,335,60,60)
  box29 = new Redbox(531,335,60,60)

  box30 = new Limebox(502,275,60,60)

  ground = new Platform(767,690,1528,10)
  
  platform1 = new Platform(1000,400,400,10)
  platform2 = new Platform(500,550,400,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(215)
  rectMode(CENTER)
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();

 platform1.display();
 platform2.display();

ground.display();
  ball.display();
 
  
  

}

 


