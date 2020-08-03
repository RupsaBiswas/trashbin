const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var box,box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    paper= new Paper(200,300,50);
    box= new Box(900,300,20,100);
    box1= new Box(780,300,20,100);
    box2= new Box(840,360,140,20);


}



function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    paper.display();
    box.display();
    box1.display();
    box2.display();
    

    
}


    function keyPressed(){
   if(keyCode===UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-185});
   }
    }

    