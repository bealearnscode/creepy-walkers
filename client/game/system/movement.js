export default function movementSystem(entities) {
    
    function tick() {
        entities.forEach(function(entity) {
		    if(entity.getComponentKeys().includes("badGuyMoves")) {
			    entity.move();
		    }
	    });
        
    }
    
    function run() {
		setInterval(tick, 1000/60);
	}
	
	return Object.freeze({
	    run: run,
	    tick: tick
	});
	
    
}