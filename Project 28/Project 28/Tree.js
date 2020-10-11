class Tree{
    constructor(){
        var options ={
            isStatic:true
        }
        //this.body = Bodies.rectangle(400,500,400,200,options);
        //this.width = 400;
        //this.height = 200;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.image);
    }
    display(){
        //rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,550,400,500,500);
    }
}