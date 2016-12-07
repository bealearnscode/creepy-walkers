import findPath from './aStar/findPath'

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
dirt.src = './assets/maptiles/dirt-road.png';
dirt.onload = function() {
	dirtReady = true
}

var grassReady = false;
var grass = new Image();
grass.src = './assets/maptiles/grass.png';
grass.onload = function() {
	grassReady = true
}

var coinReady = false;
var coin = new Image();
coin.src = './assets/maptiles/coin.png'
coin.onload = function() {
	coinReady = true
}

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

console.log(findPath(map2.layout,[0,1],[15,14]))
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

export default function main() {
	renderMap(map2);
	requestAnimationFrame(main)
	drawPath(findPath(map2.layout,[0,1],[15,14]))
}


