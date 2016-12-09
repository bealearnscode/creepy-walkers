export default function badGuyMovementComponent(spec) {
    
    console.log("Bad guy on the move");
    
    /*function moveBadGuy(spec) {
    
    //need click event
    //import entities and game canvas? this is already in the input system
    //canvas.addEventListener("click", clickHandler, false);
    //function clickHandler(e) {
		console.log("you clicked the canvas");
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		
	////// ------------ //////	
		
        var move = {
            speed: 256
        }
        var update = function (modifier) {
	        if (38 in keysDown) { // Player holding up
		    move -= move.speed * modifier;
	    }
	        if (40 in keysDown) { // Player holding down
		    move += move.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}
        
        /*return Object.freeze({
		    moveBadGuy: moveBadGuy,
	    });
    }*/
}
