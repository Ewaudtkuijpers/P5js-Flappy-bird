var x,y,v, vy
var wolken
var gravity

class Pipe{
  constructor(x,y,w,h,vx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.c = "green";
  }

  show () {
    fill(this.c)
    rect(this.x,this.y,this.w,this.h);
    this.x = this.x - 2;
  }

  checkCollison (cy) {
    let testX = 180;
    let testY = cy;
    
    if (180 < this.x) {
      testX = this.x;
    }
    else if (180 > this.x+this.w)
    {
      testX = this.x + this.w;
    }

    if (cy < this.y)
    {
      testY = this.y;
    }
    else if (cy > this.y+this.h)
    {
      testY = this.y + this.h;
    }

    let d = dist(180, cy, testX, testY);

    if (d <= 28) {
      this.c = "red";
      return true;
    }
    else {
    this.c = "green";
      return false;
    }
  }
}

var pipes = [];

function preload() {
 wolken = loadImage('wolken.png');
}

function setup() {
  createCanvas(500,300);  
  gravity = 0.5;
  y = 200;
  vy = -1.0;
}

function draw() {
 image(wolken, 0, 0, width, height);

  fill("yellow")
  ellipse(180,y,28,28);
  vy += gravity;
  y += vy;
  y = constrain(y, -500, 300);
 
  if(frameCount % 100 == 0){
    console.log("nieuwe pipe!");
    console.log(pipes.length);

    let randHeight = random(height/2);
    let gapheight = 120;

    let pipe1 = new Pipe(500,randHeight + gapheight ,30,height + (randHeight + gapheight),-5);
    let pipe2 = new Pipe(500, 0, 30, randHeight, -5);

    pipes.push(pipe1);
    pipes.push(pipe2);

    if(pipes.length > 8){
      pipes.splice(0,2);
    }
  }

  pipes.forEach((p)=> {
    if (p.checkCollison(y)) {
      
      
    }   
    p.show()
  });   
  
 
}

function mousePressed() {
  vy = -8;
}
