var x,y,v
var wolken

class Pipe{
  constructor(x,y,w,h,vx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
  }

  show () {
    fill("green")
    rect(this.x,this.y,this.w,this.h);
    this.x = this.x - 2;
    fill("yellow")
    ellipse(20,100,32,32);
  }
}

var pipes = [];

function preload() {
 wolken = loadImage('wolken.png');
}

function setup() {
  createCanvas(500,300);  
}

function draw() {
 image(wolken, 0, 0, width, height);
 
  if(frameCount % 100 == 0){
    console.log("nieuwe pipe!");
    console.log(pipes.length);

    let randHeight = random(height/2);
    let gapheight = 100;

    let pipe1 = new Pipe(500,randHeight + gapheight ,30,height + (randHeight + gapheight),-5);
    let pipe2 = new Pipe(500, 0, 30, randHeight, -5);

    pipes.push(pipe1);
    pipes.push(pipe2);
  }

  pipes.forEach(p=> p.show());
}

function keypressed(){
  if (keycode === 32) {
    velocity
  }
}

