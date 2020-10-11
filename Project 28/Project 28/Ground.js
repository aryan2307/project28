class Ground{
    constructor(){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(400,675,800,100,options);
        this.width = 800;
        this.height = 100;
        World.add(world, this.body);
    }
    display(){
        push();
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}