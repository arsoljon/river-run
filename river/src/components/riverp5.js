let x
let y
let leftx
let rightx
let defaultSize
let maxSize
let changingSize
let defaultSpeed
let maxSpeed
let speed
let faceSpeed
let centerx
let ht
let diff
let smileChange
let songLength
let maxLines
let lines = []


function setup() {
  createCanvas(400, 400);
  defaultSize = 30
  maxSize = 200
  defaultSpeed = 1
  maxSpeed = 5
  changingSize = 50
  speed = random(defaultSpeed, maxSpeed)
  leftx = (width/2) - defaultSize
  rightx = (width/2) + defaultSize
  x = random(leftx + 2, rightx - 2)
  y = height + defaultSize
  // Create initial lines
  maxLines = 15
  for (let i = 0; i < maxLines; i++) {
    x = random(leftx + 2, rightx - 2)
    y = height + defaultSize
    changingSize = random(defaultSize, maxSize)
    lines.push({
      x1: x,   
      y1: y,          
      x2: x,   
      y2: y+changingSize,          
      speed: random(defaultSpeed, maxSpeed)
    });
  }
  songLength = 148
  faceSpeed = songLength/height *0.3
  smileChange = 0
  centerx = leftx + ((rightx - leftx)/2)
  ht = height - height/6
  diff = (rightx - leftx)/4
  
}

function draw() {
  background(220);
  //borders
  line(leftx, 0, leftx, height)
  line(rightx, 0, rightx, height)
  //lines
  for (let i = 0; i < lines.length; i++) {
    let lineObj = lines[i];
    
    // Move the line upwards
    lineObj.y1 -= lineObj.speed;
    lineObj.y2 -= lineObj.speed;
    
    // Draw the line with updated coordinates
    line(lineObj.x1, lineObj.y1, lineObj.x2, lineObj.y2);
    
    // Reset the line's position if it goes off the top of the canvas
    if (lineObj.y2 < 0) {
      let tempy = random(height + defaultSize, height + defaultSize+30)
      lineObj.changingSize = random(defaultSize, maxSize)
      lineObj.speed = random(defaultSpeed, maxSpeed)
      lineObj.y1 = tempy; 
      lineObj.y2 = tempy + changingSize; 
    }
  }
  //head
  noStroke()
  fill(color(220, 220, 220, 230))
  ellipse(centerx, ht+diff*0.7,rightx-leftx-2 ,rightx-leftx+15)
  stroke(100)
  //face
  //left eye
  ellipse(centerx-diff, ht - 10, 1,1)
  //left undereye
  line(leftx + 5, ht, centerx - 5, ht)
  //right eye
  ellipse(centerx+diff, ht - 10, 1,1)
  //right undereye
  line(centerx + 5, ht, rightx - 5, ht)
  //nose
  let nosex = centerx + diff * 0.25 
  let nosey = ht + diff*0.7
  line(nosex , nosey, nosex + diff * 0.3, nosey + diff)
  line(nosex + diff * 0.3, nosey + diff, nosex, nosey + diff)
  //mouth
  //line(centerx - diff*0.4, ht + diff*2.8, centerx + diff * 0.8, ht + diff* 2.8)
  ht = ht - faceSpeed
  if (ht < (0 - diff * 3)){
      ht = height + diff 
  }
  curve(centerx - diff*0.4, ht + diff*2.8-smileChange, centerx - diff*0.4, ht + diff*2.8, centerx + diff * 0.8, ht + diff* 2.8, centerx + diff * 0.8, ht + diff*2.8-smileChange);
}


function mousePressed(){
  if(mouseX > leftx && mouseX < rightx && mouseY < ht + diff*3 && mouseY > ht - diff){
  smileChange = 20
  }
  else{
    smileChange =0
  }
}

function mouseDragged(){
  if(mouseX > leftx && mouseX < rightx && mouseY < ht + diff*3 && mouseY > ht - diff){
  smileChange = 20
  }
  else{
    smileChange =0
  }
}


function mouseReleased(){
  smileChange = 0
}
