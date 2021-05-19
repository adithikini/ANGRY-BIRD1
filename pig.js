class Pig{
    constructor(x,y){
        super(x,y,50,50)

       this.pigimage=loadImage("pig.png")
       this.visibility=255
        World.add(world,this.body)
    }
    display(){
        var position=this.body.position
        imageMode(CENTER)
        
    }
}