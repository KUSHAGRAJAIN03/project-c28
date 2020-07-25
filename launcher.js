class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB=pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var B = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y,B.x,B.y);
    }
}
    fly(){
        this.chain.bodyA=null;
    }
}
