// illustration.js
var backgroundImg;
var castleImg;
var cloud1Img;
var cloud2Img;
var cloud3Img;
var flying1Img;
var flying2Img;
var tacoImg;

function preload() {
	backgroundImg = loadImage("images/background.png");
	castleImg = loadImage("images/castle.png");
	cloud1Img = loadImage("images/cloud1.png");
	cloud2Img = loadImage("images/cloud2.png");
	cloud3Img = loadImage("images/cloud3.png");
	flying1Img = loadImage("images/flying1.png");
	flying2Img = loadImage("images/flying2.png");
	tacoImg = loadImage("images/taco.png");

}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(backgroundImg, 0, 0);
	frameRate(1);
	image(cloud1Img, random(370, 350), 50);
	image(cloud2Img, random(180, 210), 150);
	image(cloud3Img, random(0, 30), 10);
	image(castleImg, 0, 200);
	//image(flying1Img, 100, mouseY);
	//image(tacoImg, random(0, 800), random(0, 600));

	if (mouseIsPressed) {
		image(flying1Img, mouseX - 170, mouseY - 170);
	} else {
		image(flying2Img, mouseX - 170, mouseY - 170);
	}

	//image(tacoImg, random(0, 800), random(0, 600));
	//image(flying2Img, mouseX, mouseY);
	//else
	//	image(flying2Img, mouseX - 170, 350, 330);
}
