let Red;
let Blue;

let button_1 = true; 
let button_2; 
let button_3; 
let button_4; 
let button_5; 
let c;

function setup() {
  createCanvas(800, 800);
  background(265);
  noStroke();
}

function draw() {


    let x1 = random(width);
    let y1 = random(height);

    let x2 = round(x1 + random(-10, 10));
    let y2 = round(y1 + random(-10, 10));

    let w = width / 5;
    let h = height / 5;

    set(x2, y2, get(x1, y1, w, h));
  
  strokeWeight(30);
  fill(40);
  ellipse(60, 60, 100, 100); 

  fill(90);
  ellipse(60, 160, 100, 100); 

  fill(130); 
  ellipse(60, 260, 100, 100); 

  fill(190); 
  ellipse(60, 360, 100, 100); 

  fill(255); 
  ellipse(60, 460, 100, 100); 
  

  if (mouseX < 60 && mouseY < 60) {
    
    if (mouseIsPressed) {
      button_1 = true;
      button_2 = false;
      button_3 = false;
      button_4 = false;
      button_5 = false;
    }
  } else if (mouseX < 60 && mouseY > 60 && mouseY < 160) {
    
    if (mouseIsPressed) {
      button_1 = false;
      button_2 = true;
      button_3 = false;
      button_4 = false;
      button_5 = false;
    }
  } else if (mouseX < width * 0.125 && mouseY > 160 && mouseY < 260) {
    
    if (mouseIsPressed) {
      button_1 = false;
      button_2 = false;
      button_3 = true;
      button_4 = false;
      button_5 = false;
    }
  } else if (mouseX < width * 0.125 && mouseY > 260 && mouseY < 360) {
   
    if (mouseIsPressed) {
      button_1 = false;
      button_2 = false;
      button_3 = false;
      button_4 = true;
      button_5 = false;
    }
  } else if (mouseX < width * 0.125 && mouseY > 360 && mouseY < 460) {
    
    if (mouseIsPressed) {
      button_1 = false;
      button_2 = false;
      button_3 = false;
      button_4 = false;
      button_5 = true;
    }
  } else {
    if (mouseIsPressed) {
      fill(c);
      ellipse(mouseX, mouseY, 40, 40);
    }
  }

  if (button_1) {
    c = color(40);
  } else if (button_2) {
    c = color(90);
  } else if (button_3) {
    c = color(130);
  } else if (button_4) {
    c = color(190);
  } else if (button_5) {
    c = color(250);
  }
}