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
		    				//console.log(1);
		    				if(entityA.getEntityType() !== entityB.getEntityType()) {
		    					console.log("entityA", entityA);
		    					console.log("entityB", entityB);
		    					if (entityA.onCollision) {
									entityA.onCollision(entityB);
									if(entityA.getEntityType() === "badguy") {
										entityA.reduceHealth(1);
										console.log("HEALTHA:", entityA.getHealth());
									}
								}
								if (entityB.onCollision) {
									entityB.onCollision(entityA);
									if(entityB.getEntityType() === "badguy") {
										entityB.reduceHealth(1);
										console.log("HEALTHB:", entityB.getHealth());
									}
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
    });

}