class Ball{
    constructor(x,y,r){
      var options={
        density:1,
        frictionAir:0.005,
      }
      this.r=r;
      this.body=Bodies.circle(x,y,r/2,options);
      World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("lightblue");
        ellipse(0,0,this.r,this.r);
        pop();

    }













}