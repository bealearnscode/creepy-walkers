export default function movementSystem(entities) {

	function run() {
		setInterval(tick, 1000/60);
	}
    
    function tick() {
        entities.forEach(function(entity) {
		    if(entity.getComponentKeys().includes("movement")) {
			    entity.move();
		    }
	    });
    }
	
	return Object.freeze({
	    run: run,
	    tick: tick
	});
    
}