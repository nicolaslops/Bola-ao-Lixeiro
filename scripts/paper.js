class Paper {
  constructor(x, y, r, image) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 1.2,
    };
    this.image = image;
    this.x = x;
    this.y = y;
    this.r = r || 25;
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    if (this.image) {
      image(this.image, 0, 0, this.r * 2, this.r * 2);
    } else {
      fill(255, 0, 0);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
    }
    pop();
  }
}
