class slingShot{
    constructor(BodyA,PointB){
var options = {
    bodyA:BodyA,
    pointB:PointB,
    stiffness:1,
    length:10
}
this.pointB = PointB
this.sling = Constraint.create(options);
World.add(world,this.sling);
    } 
    fly(){
        this.sling.bodyA = null
    }
    display(){
        if(this.sling.bodyA){
        strokeWeight(5);
        stroke("brown");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}