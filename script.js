var x,y

class Pipe{
  constructor(x,y,w,h,vx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
  }

  show () {
    rect(this.x,this.y,this.w,this.h);
    this.x = this.x - 2;
  }
}

var pipes = [];

function setup() {
  createCanvas(500,300);  
}

function draw() {
  background(0,225,250);

  if(frameCount % 100 == 0){
    console.log("nieuwe pipe!");
    console.log(pipes.length);
    
    pipe = new Pipe(500,250,30,50,0);
    pipes.push(pipe);
  }

  pipes.forEach(p=> p.show());
}

