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
dirt.src = './assets/img/maptiles/dirt-noborder.png';
dirt.onload = function() {
	dirtReady = true
}

var grassReady = false;
var grass = new Image();
grass.src = './assets/img/maptiles/grass-noborder.png';
grass.onload = function() {
	grassReady = true
}

var coinReady = false;
var coin = new Image();
coin.src = './assets/img/misc/coin-8x8.png'
coin.onload = function() {
	coinReady = true
}

// var whiteWalkerReady = false;
// var whiteWalker = new Image();
// whiteWalker.src = './assets/creep/whitewalker.png'
// whiteWalker.onload =  function() {
// 	whiteWalker = true
// }

//setup variables for function, to be moved out or eliminated as learning progresses
var currentCoordinateIndex=0;
var nextCoordinate;
var currentCoordinate;
//pixel change on x-axis
var rowDelta=0;
//pixel change on y-axis
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
			creepX = currentCoordinate.x*32;
			creepY = currentCoordinate.y*32;
		}
		//check if the creep has reached the next coordinate
		if(creepX==nextCoordinate.x*32 && creepY==nextCoordinate.y*32) {
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
			if(nextCoordinate.y > currentCoordinate.y) {
				colDelta=4;
			}else if(nextCoordinate.y < currentCoordinate.y) {
				colDelta=-4
			}else {
				colDelta = 0 
			}
			if(nextCoordinate.x > currentCoordinate.x) {
				rowDelta = 4;
			}else if(nextCoordinate.x < currentCoordinate.x) {
				rowDelta = -4
			}else {
				rowDelta=0
			}
			creepMoving = true;
		}
		
		creepX+=rowDelta;
		creepY+=colDelta;

		ctx.save();
		ctx.setTransform(1,0,0,1,0,0);
		//not sure why, but x and y are flipped here
		//only spot where this happens
		ctx.translate((creepY)+16,(creepX)+16);
		ctx.drawImage(coin,0,0,32,32,-4,0,32,32);
		ctx.restore();
	}
	else {
		// put logic for if creep reaches end here.
		return
	}
}

var path = findPath(map2.layout,[0,1],[15,14])

export default function main() {
	renderMap(map2);
	// drawPath(findPath(map2.layout,[0,1],[15,14]))
	moveCreep(path)
	requestAnimationFrame(main)
}

//todo list for this function
/*
modularize the functions, make them into objects
and only return the actual function for the recursion
*/
