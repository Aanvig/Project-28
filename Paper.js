class Paper {
    constructor(x,y,radius) {
        
        var options = {
            'isStatic' :false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)
        World.add(world,this.image)
        this.radius=radius
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(RADIUS)
        image(this.image,0,0, this.radius, this.radius);
        pop();

    }
}