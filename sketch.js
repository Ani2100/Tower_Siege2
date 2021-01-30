const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(800,300,320,10);

    box1 = new Box(800,280,30,30);
    box2 = new Box(830,280,30,30);
    box3 = new Box(860,280,30,30);
    box4 = new Box(770,280,30,30);
    box5 = new Box(740,280,30,30);
    box6 = new Box(710,280,30,30);
    box7 = new Box(680,280,30,30);

    box8 = new Box(800,250,30,30);
    box9 = new Box(830,250,30,30);
    box10 = new Box(730,250,30,30);
    box_1 = new Box(740,250,30,30)
    box_2 = new Box(710,250,30,30)
    

   box11 = new Box(800,220,30,30);
   box12 = new Box(730,220,30,30);
   box13 = new Box(740,220,30,30);


    box14 = new Box(720,190,30,30);
    box15 = new Box(760,190,30,30);

    box16 = new Box(740,160,30,30);
    
    

    
    

    bird = new Bird(100,100);
    stick = new SlingShot(bird.body,{x:500, y:50})

}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
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
    box_1.display();
    box_2.display();

    box11.display();
   box12.display();
    box13.display(); 
   box14.display();
   box15.display();
   box16.display();
   
    
    bird.display();
    stick.display();
    ground.display();
}


function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}