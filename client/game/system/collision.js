export default function collisionSystem(entities) {

	function run() {
		setInterval(tick, 1000/4); //4 frames per second
	}

	function tick() {
        entities.forEach(function(entityA, index) {
		    if(entityA.getComponentKeys().includes("collision")) {
		    	var slicedEntities = entities.slice(index + 1, entities.length);
		    	slicedEntities.forEach(function(entityB) {
		    		if(entityB.getComponentKeys().includes("collision")) {
		    			if (entityA.onCollision(entityB)) {
		    				if(entityA.getEntityType() !== entityB.getEntityType()) {
		    					if (entityA.onCollision) {
									entityA.onCollision(entityB);
								}
								if (entityB.onCollision) {
									entityB.onCollision(entityA);
								}
		    				}
		    				else {
		    					console.log("same entity type");
		    				}
						}
		    		}
		    	});
		    }
	    });
    }

    return Object.freeze({
    	run: run,
    	tick: tick,
    })

}