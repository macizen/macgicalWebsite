const gameSketch = (p) => {

  p.ballOneX = 50;
  p.ballOneY = 50;
  p.ballTwoX = 350;
  p.ballTwoY = 50;

  p.oneXspeed = 2;
  p.oneYspeed = 3;
  p.twoXspeed = -1;
  p.twoYspeed = 2;

  p.ballOpacity = 0;

  p.circSize = 5;
  p.circOpacity = 0;

  p.setup = function() {
    let cvn = p.createCanvas(400, 400);
    cvn.parent("gameContainer");   // <-- attach to your div
  };

  p.draw = function() {

    // vibes and aesthetics
    p.background(255, 75);
    p.stroke(p.color(0));

    let pDistance1 = p.dist(p.mouseX, 380, p.ballOneX, p.ballOneY);
    let pDistance2 = p.dist(p.mouseX, 380, p.ballTwoX, p.ballTwoY);

    // when the balls touch
    let ballDistance = p.dist(p.ballOneX, p.ballOneY, p.ballTwoX, p.ballTwoY);
    if (ballDistance <= 50) {
      p.ballOpacity = 255;
    }
    p.ballOpacity -= 40;

    // shrinking stroke as balls get closer
    let ballStroke = p.map(ballDistance, 50, 300, 0, 3);

    p.strokeWeight(ballStroke);

    // first moving ball
    p.fill(150, 130, 210, p.ballOpacity);
    p.ellipse(p.ballOneX, p.ballOneY, 50);
    p.ballOneX += p.oneXspeed;
    p.ballOneY += p.oneYspeed;

    // second moving ball
    p.ellipse(p.ballTwoX, p.ballTwoY, 50);
    p.ballTwoX += p.twoXspeed;
    p.ballTwoY += p.twoYspeed;

    // ball boundaries
    if (p.ballOneY <= 1) {
      p.oneYspeed *= -1;
    }
    if (p.ballOneX <= 1 || p.ballOneX >= 400) {
      p.oneXspeed *= -1;
    }
    if (p.ballTwoY <= 1) {
      p.twoYspeed *= -1;
    }
    if (p.ballTwoX <= 1 || p.ballTwoX >= 400) {
      p.twoXspeed *= -1;
    }

    // paddle bounces
    if (pDistance1 <= 45) {
      p.oneYspeed = -3;
    }
    if (pDistance2 <= 45) {
      p.twoYspeed = -2;
    }

    // paddle
    p.rectMode(p.CENTER);
    p.strokeWeight(2);
    p.fill(255, 100);
    p.rect(p.mouseX, 380, 100, 20);

    // hit circle
    p.noStroke();
    p.fill(255, 230, 170, p.circOpacity);
    p.ellipse(p.mouseX, 380, p.circSize);

    if (pDistance1 <= 50 || pDistance2 <= 50) {
      p.circSize += 8;
      p.circSize += 8;
      p.circSize += 8;
      p.circSize += 8;
      p.circSize += 8;
      p.circSize += 8;
      p.circSize += 8;
      p.circSize += 8;
      p.circOpacity = 1;
      p.circOpacity *= 5;
      p.circOpacity *= 5;
      p.circOpacity *= 5;
    } else if (pDistance1 > 100 || pDistance2 > 100) {
      p.circSize = 0;
    } else {
      p.circSize = 0;
    }
  };

};

new p5(gameSketch);
