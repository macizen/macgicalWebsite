const shapesSketch = (p) => {

  p.setup = () => {
    const canvas = p.createCanvas(400, 400);
    canvas.parent("shapesContainer");
    p.noStroke();

    for (let i = 0; i < 15; i++) {
      p.fill(p.random(255), p.random(255), p.random(255), p.random(50, 255));
      p.rect(p.random(-50, p.width), p.random(-50, p.height), p.random(0, p.width), p.random(0, p.height));
    }
  };

  // Optional: If you want the shapes to stay static, leave draw empty
  p.draw = () => {};
};

new p5(shapesSketch);