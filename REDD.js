class Red{
    constructor(x,y,width,height){
        var red_options={
            isStatic=true
        }
        this.body=Bodies.rectangle(200,100,200,100,red_options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this,body,poaition,y,this,width,this,height);
    }

}