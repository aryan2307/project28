class Mango{
    constructor(x,y){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x, this.y, 30, options);
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,60,60);
        pop();
    }
}