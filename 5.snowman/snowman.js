//5. snowman

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  //your drawing goes here
  background('lightblue')


  stroke('grey');
  strokeWeight(5);
  ellipse(270,430,220,220);

  ellipse(270,280,160,160);

  ellipse(270,160,130,130);

  fill('black');
  strokeWeight(0);
  ellipse(300,150,20,20);

  ellipse(250,150,20,20);

  fill('orange');
  strokeWeight(0);
  triangle(265,200,280,160,260,160);

}
