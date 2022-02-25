var box;


function setup() {
  createCanvas(400, 400);
box ={
  x: 100,
  y:100,
  w: 50,
  h: 50,
  cor:["pink","black","white","brown"],
  vx: 3,
}



}

function draw() {
  background(230);

  rectMode(CENTER);
  fill (box.cor[3]);
  rect (box.x,box.y,box.w,box.h);
  box.x =box.x +box.vx;
}