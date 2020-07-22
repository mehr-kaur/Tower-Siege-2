class Box {
    constructor(x, y, width, height, ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30,40);
        this.width = 30;
        this.height = 40;
        World.add(world, rectangle);
      }
      display(){
      visibility = true;

        if (speed<3) {
          visibility = false;
        }
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(rectangle_img, 0, 0, this.width, this.height);
   tint(0,153,204)
        pop();
      }

      keyPressed() {
        if (keyCode === 32){
          slingshot.attach(this.polygon);
        }
      }
}