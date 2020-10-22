class Chain {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10

        }
        //to create options and add chain to world
        this.chain =Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
   var pointA=this.chain.bodyA.position;
   var pointB=this.chain.bodyB.position;
   strokeWeight(4);
  // to create the contraint line
   line(pointA.x,pointA.y,pointB.x,pointB.y) ;
    }
}