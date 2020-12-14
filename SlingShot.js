class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    display(){
        console.log(this.chain.bodyA);
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("purple");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
    }
    
    fly(){
        this.chain.bodyA = null;
        console.log("flew");
    }
    attach(body){
        this.chain.bodyA = body;
    }

    
}