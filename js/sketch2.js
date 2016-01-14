console.log("hello from reading from js");

var d=20;

function setup(){
	var myCanvas=createCanvas(800,250);
	//link to id mySketch from header tag
	myCanvas.parent('mySketch');
}

function draw(){
	if(mouseIsPressed){
		stroke(255);
	} else {
		stroke(0);
	}
	line(mouseX-66, mouseY, mouseX+66, mouseY);
	line(mouseX, mouseY-66, mouseX, mouseY+66);
}
