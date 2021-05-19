class Bird{
   constructor(x,y,width,height){
       var options={
           isStatic:true
       }
       this.body=Bodies.circle(x,y,width,height)
       this.width=width
       this.height=height
       World.add(world,this.body)
       this.birdimage=loadImage("angrybird.png")
       
   }
   display(){
       var position=this.body.position
       imageMode(CENTER)
       image(position.x,position.y,this.width,this.height)
   }
}