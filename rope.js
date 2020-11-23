class Rope{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:500
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pos=this.rope.bodyA.position
        var pos2=this.pointB;
        push();
        stroke("lightgreen")
        line(pos2.x,pos2.y,pos.x,pos.y);
        pop();
    }

}