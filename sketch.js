const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var pedra;
var ferro;

function setup(){
    var canvas = createCanvas(757,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   
    pedra = new Pedra(300,200);
    ferro = new Iron(600,200);

    borracha = new Rubber(100,200)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    borracha.display();
    ferro.display();
    pedra.display();

 
}