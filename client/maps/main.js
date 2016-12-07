import findPath from './aStar/findPath'
//map variables
var map = 
	[[0,0,1,0,0,0],
	 [1,0,1,0,1,0],
	 [1,0,1,0,1,0],
	 [1,0,1,0,1,0],
	 [1,0,0,0,1,0],
	 [1,1,1,1,1,0]]

var map2 = {
	layout: [
	[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1],
	[1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
	],
	dimensions: 16,
	startingPoint: [1,0],
	endingPoint: [14,15]
}

//canvas setup
//map dimensions by tile 
var canvasTileWidth = 20;
var canvasTileHeight = 20;

//tile dimensions by pixel
var tileWidth = 32;
var tileHeight = 32;

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
canvas.width = canvasTileWidth*tileWidth;
canvas.height = canvasTileHeight * tileHeight;
ctx.fillRect(0,0,canvas.width,canvas.height);

//load up images
var dirtReady = false;
var dirt = new Image();
dirt.src = './assets/maptiles/dirt-noborder.png';
dirt.onload = function() {
	dirtReady = true
}

var grassReady = false;
var grass = new Image();
grass.src = './assets/maptiles/grass-noborder.png';
grass.onload = function() {
	grassReady = true
}

var coinReady = false;
var coin = new Image();
coin.src = './assets/maptiles/coin.png'
coin.onload = function() {
	coinReady = true
}

var whiteWalkerReady = false;
var whiteWalker = new Image();
whiteWalker.src = './assets/creep/whitewalker.png'
whiteWalker.onload =  function() {
	whiteWalker = true
}

//setup variables for function, to be moved out or eliminated as learning progresses
var currentCoordinateIndex=0;
var nextCoordinate;
var currentCoordinate;
//pixel change on y-axis
var rowDelta=0;
//pixel change on x-axis
var colDelta=0;
//current x x-axis coordinate of the creep
var creepX=0;
//current y-axis coordinate of the creep
var creepY=0;
//if sprite can rotate, how much we are rotating
var angleInRadians=0;
//boolean to track if the tank has started moving
var creepStarted=false;
//boolean to track if the creep is moving
var creepMoving=false;
//mark true once path has been completed
var finishedPath=false;

function renderMap(map) {
	for(var y = 0;y<(map.dimensions);y++) {
		for(var x = 0; x<(map.dimensions);x++) {
			switch(map.layout[x][y]) {
				case 0:
					if(dirtReady) {
						ctx.drawImage(dirt,0,0,tileWidth,tileHeight,y*tileWidth,x*tileHeight,tileWidth,tileHeight)
					}		
					break;
				case 1:
					if(grassReady) {
						ctx.drawImage(grass,0,0,tileWidth,tileHeight,y*tileWidth,x*tileHeight,tileWidth,tileHeight)
					}
					break;
			}
		}
	}
}

function drawPath(path) {
	for(var i = 0;i<path.length;i++) {
		if(coinReady) {
			ctx.drawImage(coin,0,0,8,8,path[i][1]*tileWidth,path[i][0]*tileHeight,8,8)
		}	
	}		
}
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

function moveCreep(path) {
	//starting variables for creep, possibly dependent on the map
	//might need to add these as parameters after modularization
	if(!finishedPath) {
		if(!creepStarted) {
			currentCoordinate = path[0];
			creepStarted = true;
			nextCoordinate = path[1];
			creepX = currentCoordinate[0]*32;
			creepY = currentCoordinate[1]*32;
		}
		//check if the creep has reached the next coordinate
		console.log('current coordinatex ' + creepX)
		console.log('current coordinatey ' + creepY)
		console.log('target coordinatex ' + nextCoordinate[1]*32)
		console.log('target coordinatey ' + nextCoordinate[0]*32)
		if(creepX==nextCoordinate[0]*32 && creepY==nextCoordinate[1]*32) {
			currentCoordinateIndex++;
			if(currentCoordinateIndex == path.length) {
				finishedPath = true;
			}
			currentCoordinate = nextCoordinate;
			nextCoordinate = path[currentCoordinateIndex]
			creepMoving = false;
		}

		//calculate where to move next
		if(!finishedPath) {
			if(nextCoordinate[1] > currentCoordinate[1]) {
				colDelta=1;
			}else if(nextCoordinate[1] < currentCoordinate[1]) {
				colDelta=-1
			}else {
				colDelta = 0 
			}
			if(nextCoordinate[0] > currentCoordinate[0]) {
				rowDelta = 1;
			}else if(nextCoordinate[0] < currentCoordinate[0]) {
				rowDelta = -1
			}else {
				rowDelta=0
			}
			creepMoving = true;
		}
		
		creepX+=rowDelta;
		creepY+=colDelta
		ctx.save();
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate((creepY),(creepX)+52);
		ctx.drawImage(coin,0,0,32,32,8,-32,32,32);
		ctx.restore();
	}
}

export default function main() {
	renderMap(map2);
	// drawPath(findPath(map2.layout,[0,1],[15,14]))
	moveCreep(findPath(map2.layout,[0,1],[15,14]))
	requestAnimationFrame(main)
}


