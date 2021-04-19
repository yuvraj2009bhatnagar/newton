
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var roof1,rope1,rope2,rope3,rope4,rope5;



function setup()
{
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  roof1=new Roof(width/2,height/4,width/4,20);
   bobDiameter=40;
    startBobPositionX=width/2; 
   startBobPositionY=height/4+500; 
   bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
    bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
     bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
     bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
      bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

  



rope1 = new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0)
rope2 = new Rope(bobObject2.body,roof1.body,-bobDiameter*1,0)
rope3 = new Rope(bobObject3.body,roof1.body,0,0)
rope4 = new Rope(bobObject4.body,roof1.body,bobDiameter*1,0)
rope5 = new Rope(bobObject5.body,roof1.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
   bobObject5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();





}

function keyPressed(){

if(keyCode=== UP_ARROW){

Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50 , y:-45})


}




}

