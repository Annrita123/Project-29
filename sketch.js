const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground3,ground,ground2,block1,block2,block3,block4,block5,block6,
block7,block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20,block21,block22,
block23,block24,block25,block26,block27,block28,block29,block30,
block31,block32,ball,slingshot;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    
    ball=new Polygon(200,100);
    slingshot = new SlingShot(ball.body,{x:200, y:500});
    ground=new Ground(390,500,250,20);
    ground2=new Ground(800,350,250,20);
    ground3=new Ground(500,600,1200,20);
    block1=new Box(300,275,30,40);
    block2=new Box(330,275,30,40);
    block3=new Box(360,275,30,40);
    block4=new Box(390,275,30,40);
    block5=new Box(420,275,30,40);
    block6=new Box(450,275,30,40);
    block7=new Box(480,275,30,40);
    block8=new Box(330,235,30,40);
    block9=new Box(360,235,30,40);
    block10=new Box(390,235,30,40);
    block11=new Box(420,235,30,40);
    block12=new Box(450,235,30,40);
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
    block16=new Box(390,155,30,40);
    block17=new Box(700,275,30,40);
    block18=new Box(730,275,30,40);
    block19=new Box(760,275,30,40);
    block20=new Box(790,275,30,40);
    block21=new Box(820,275,30,40);
    block22=new Box(850,275,30,40);
    block23=new Box(880,275,30,40);
    block24=new Box(730,235,30,40);
    block25=new Box(760,235,30,40);
    block26=new Box(790,235,30,40);
    block27=new Box(820,235,30,40);
    block28=new Box(850,235,30,40);
    block29=new Box(760,195,30,40);
    block30=new Box(790,195,30,40);
    block31=new Box(820,195,30,40);
    block32=new Box(790,155,30,40);
    gameState="onSling";
}

    function draw(){
        background(0);
        Engine.update(engine);
        ball.display();
        ground3.display();
        ground.display();
        ground2.display();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        block17.display();
        block18.display();
        block19.display();
        block20.display();
        block21.display();
        block22.display();
        block23.display();
        block24.display();
        block25.display();
        block26.display();
        block27.display();
        block28.display();
        block29.display();
        block30.display();
        block31.display();
        block32.display();
        slingshot.display();
      
    }

    function mouseDragged(){
        if (gameState!=="launched"){
            Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
        }
    }

    function mouseReleased(){
        slingshot.fly();
        gameState = "launched";
        
    }
    
    function keyPressed(){
        if(keyCode === 32 && ball.body.speed<1){
    
            Matter.Body.setPosition(ball.body,{x:200,y:500})
           slingshot.attach(ball.body);
           gameState="onSling";
           
        }
    }