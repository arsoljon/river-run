let x
let y
let centerX
let centerY
let maxSize 
let toplfX
let toplfY
let toprmX
let toprmY
let botlfX
let botlfY
let botrmX
let botrmY
let x1
let y1
let x2
let y2
let x3
let y3
let x4
let y4

let topX1
let topY1
let topX2
let topY2
let topX3
let topY3 
let topX4  
let topY4 
  
let leftX1  
let leftY1 
let leftX2
let leftY2
let leftX3
let leftY3 
let horizontal_change
let vertical_change
let change

function setup() {
  createCanvas(400, 400);
  maxSize = 50
  horizontal_change = 0
  vertical_change = 0
  change = 1
  centerX = width / 2
  centerY = height / 2
  toplfX = centerX
  toplfY = centerY
  toprmX = toplfX + maxSize
  toprmY = toplfY
  botlfX = toplfX + maxSize
  botlfY = toplfY + maxSize
  botrmX = botlfX + maxSize
  botrmY = botlfY
  x1 = 100;
  y1 = 150;
  x2 = 300;
  y2 = 150;
  x3 = 250;
  y3 = 300;
  x4 = 50;
  y4 = 300;

  topX1 = centerX - maxSize
  topY1 = centerY - maxSize / 2
  topX2 = (centerX - maxSize /2)+maxSize/2
  topY2 = (centerY - maxSize) + maxSize
  topX3 = (centerX - maxSize /2)+maxSize*2
  topY3 = (centerY - maxSize)+maxSize
  topX4 = (centerX - maxSize /2) + maxSize 
  topY4 = (centerY - maxSize /2)
  
  leftX1 = centerX - maxSize 
  leftY1 = centerY - maxSize /2
  leftX2 = (centerX - maxSize) 
  leftY2 = (centerY - maxSize /2) + maxSize + maxSize/2
  leftX3 = (centerX - maxSize)  + maxSize
  leftY3 = (centerY - maxSize /2) + maxSize + maxSize
  leftX4 = (centerX - maxSize)  + maxSize
  leftY4 = (centerY - maxSize /2) + maxSize/2
  
}

function draw() {
  background(220);
  
  rect(centerX, centerY, maxSize + maxSize / 2, maxSize + maxSize / 2)

  quad(topX1, topY1, topX2, topY2, topX3 ,topY3, topX4, topY4);
  
  quad(leftX1, leftY1, leftX2, leftY2, leftX3, leftY3, leftX4, leftY4)
}