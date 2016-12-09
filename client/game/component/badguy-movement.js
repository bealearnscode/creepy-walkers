export default function badGuyMovementComponent(spec) {
    
    console.log("Bad guy on the move");
    
    function moveBadGuy() {
        return Object.freeze({
		    moveBadGuy: moveBadGuy,
	    });
    }
}
