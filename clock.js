function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("clockContainer");
}

function draw() {
  let h = hour()
  let m = minute()
  let s = second()
  
  let container = width/3
  
  let hourHeight = map(h, 0, 24, 0, height)
  
  let secRect = floor(map(s, 0, 59, 1, 7)) //using floor to keep output as whole number
  let secHeight = height/6
  
  let minWidth = width/15
  let minHeight = height/12
  
  let minRect = 0
  let minRectColor = 10
  
  background(255)
  noStroke()
  
  //this lets the "seconds" container color change every second
  frameRate(1)

  for(let i = 0; i < 3; i++){
    
  //making sure the background of the containers stay black 
  if(i == 0){
    fill(0)
  }else if(i == 1){
    fill(0)
  }else if(i == 2){
    fill(0)
  }
  //three rectangles take up 1/3 of the screen, representing hours, minutes, seconds
  rect((i * container), 0, container, height)
   //hour rectanlge 
  if(i == 0){
    fill(200, 180, 200)
    rect(0, height - hourHeight, container, hourHeight)
    }
  //minute rectangles
  if(i == 1){
    for(let y = 0; y < 12; y++){
      for(let x = 0; x < 5; x++){
        if(minRect < m){
        fill(minRectColor)
        rect(200 + (x * minWidth), (y * minHeight), minWidth, minHeight)
        minRect ++
        minRectColor += 3
        }
      }
    }
  }
    //second rectangles
  for(let y = 0; y < secRect; y ++){
    fill(random(255), random(255), random(255))
    rect(400, (y * secHeight), container, secHeight)
      }
    }
}