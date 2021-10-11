var x,y,v, vy
var wolken
var gravity
var gameState = 1;
var pipes = [];

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

    if (d <= 14) {
      gameState = 3;
      this.c = "green";
      return true;
    }
    else {
    this.c = "green";
      return false;
    }
  }
}

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

  if (gameState == 1) {
    menu();
  }

if (gameState == 2) {
    game();
  }

  if (gameState == 3) {
    lose();
  }
 
}

function menu() {
  textSize(30);
  textAlign(CENTER);
  text("Flappy Bird",250,60);
  textSize(20);
  text("The Game",250,85);
  textSize(15);
  text("Press [LEFT MOUSE] to start playing",250,250)
  fill("yellow");
}

function game(){
  fill("yellow")
  ellipse(180,y,28,28);
  vy += gravity;
  y += vy;
  y = constrain(y, 0, 300);
 
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

function lose() {
  textSize(30);
  text("You are dead", 250, 60);
  textSize(15);
  text("press [LEFT MOUSE] to play again",250,250)
  fill("yellow");
}

function mousePressed() {
  vy = -8;

    if (gameState != 2) {
    pipes.length = 0;
    gameState = 2
  }
}
