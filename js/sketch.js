console.log("hello from reading from js");

var d=20;

function setup(){
	var myCanvas=createCanvas(800,250);
	//link to id mySketch from header tag
	myCanvas.parent('mySketch');
}

/*
function draw(){
background(0);
fill(100,0,0);
rect(50,50,100,100);
}
*/

function draw(){
	if (mouseIsPressed){
		fill(0);
	} else {
		fill(255);
	}
ellipse(mouseX,mouseY,d,d);
}
