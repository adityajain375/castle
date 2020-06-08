

function setup() {
  createCanvas(600,500);
}

function draw() {
  background("black");  

  rect(50,300,80,200);
  rect(130,400,80,100);
  rect(210,300,150,200);
  rect(360,400,80,100);
  rect(440,300,80,200);
  rect(130,380,20,20);
  rect(190,380,20,20);
  rect(360,380,20,20);
  rect(420,380,20,20);
  triangle(50,300,130,300,90,200);
  triangle(210,300,360,300,285,100);
  triangle(440,300,520,300,480,200);
  
  drawSprites();
}