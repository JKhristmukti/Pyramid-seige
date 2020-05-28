class Seige{
    constructor(x, y, radius) {
        var options = {
            restitution:1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position;
          ellipseMode(RADIUS);
          push();
          fill("yellow");
          ellipse(pos.x,pos.y,this.radius);
          pop();
        }
    }