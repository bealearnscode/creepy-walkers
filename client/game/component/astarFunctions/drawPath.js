var coinReady = false;
var coin = new Image();
coin.src = './assets/maptiles/coin.png'
coin.onload = function() {
	coinReady = true
}


// export default function drawPath(path) {
// 	for(var i = 0;i<path.length;i++) {
// 		if(coinReady) {
// 			ctx.drawImage(coin,0,0,8,8,path[i][0],path[i][1],8,8)	
// 		}
		
// 	}
// }