class Block{
    constructor(x, y, width, height, fill) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.fill=fill;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.fill);
        rect(x,y,this.width,this.height);
      }
}