const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var angrybird
var slingshot
var log;
var pig




function preload(){
    birdimage=loadImage("angrybird.png")
    
    logimage=loadImage("tree-wood-trunk.png")
    pigimage=loadImage("pig.png")
    slinshotimg=loadImage("slingshot.png")
    bgimage=loadImage("download.jpg")
}




function setup(){
canvas=createcanvas(600,900)
engine=Engine.create();
world=engine.world;

var bird=createSprite(300,250,15,15)
var log=createSprite()

pig1=new Pig(810,240)
pig2=new Pig(810,220)

log1=new Log(810,260,300,PI/2)



ground=new Ground(600,height,1200,20)
platform=new Ground(150,304,300,160)



}



function draw(){







}