class Block{
    constructor(x, y, width, height, fill) {
        var options = {
            restitution:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.fill=fill;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.fill);
        rect(pos.x,pos.y,this.width,this.height);        
      }
}