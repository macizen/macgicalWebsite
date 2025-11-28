const bouncingSketch = (p) => {

  class FirstObjectClass {
    constructor(xPos, yPos, xSpeed, ySpeed, radius) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
      this.radius = radius;
    }

    display() {
      p.ellipse(this.xPos, this.yPos, this.radius);
    }

    run() {
      this.xPos += this.xSpeed;
      this.yPos += this.ySpeed;

      if (this.xPos > 380 || this.xPos < 20) {
        this.xSpeed *= -1;
      }
      if (this.yPos > 380 || this.yPos < 20) {
        this.ySpeed *= -1;
      }
    }
  }

  let instanceArray = [];

  p.setup = () => {
    const canvas = p.createCanvas(400, 400);
    canvas.parent("ballsContainer");

    for (let i = 0; i < 100; i++) {
      instanceArray.push(new FirstObjectClass(
        p.random(21, 379),
        p.random(21, 379),
        p.random(1, 4),
        p.random(1, 4),
        40
      ));
    }
  };

  p.draw = () => {
    p.background(0);
    for (let obj of instanceArray) {
      obj.display();
      obj.run();
    }
  };
};

new p5(bouncingSketch);
