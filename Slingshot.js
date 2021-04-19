class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 30
        }
        this.pointB = pointB
        this.Slingshot= Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    attach(body) {
        this.Slingshot.bodyA=body
    }

    fly() {
        this.Slingshot.bodyA=null
    }

      display(){
          if(this.Slingshot.bodyA) {
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
        
    }
    
}