const cameraSketch = (p) => {
  let capture;

  p.setup = () => {
    const canvas = p.createCanvas(600, 600);
    canvas.parent("cameraContainer");

    capture = p.createCapture(p.VIDEO);
    capture.size(600, 600);
    capture.hide();
  };

  p.draw = () => {
    capture.loadPixels();

    let numPixels = 4 * capture.width * capture.height;
    for (let i = 0; i < numPixels; i += 4) {
      // Red channel
      if (capture.pixels[i] % 5) {
        capture.pixels[i] = 255;
      } else {
        capture.pixels[i] = 0;
      }

      // Green channel
      capture.pixels[i + 1] = 0;

      // Blue channel
      capture.pixels[i + 2] = 0;

      // Alpha channel
      capture.pixels[i + 3] = 10;
    }

    capture.updatePixels();

    p.image(capture, 0, 0, 600, 600);
  };
};

new p5(cameraSketch);
