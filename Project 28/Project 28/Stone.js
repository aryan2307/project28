class Stone{
    constructor(){
        var options ={
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.2
        }
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(50,510,15,options);
        this.width = 15;
        this.height = 15;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;		
	    push()
	    translate(pos.x, pos.y);
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(RADIUS);
		image(this.image, 0,0,30,30);
		pop()
    }
}