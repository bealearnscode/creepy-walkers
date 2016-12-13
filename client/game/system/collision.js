export default function collisionSystem(entities) {

	function run() {
		setInterval(tick, 1000/60);
	}

	function tick() {
     //    entities.forEach(function(entityA) {
		   //  if(entityA.getComponentKeys().includes("collision")) {
		   //  	var slicedEntities = entities.slice(1);
		   //  	slicedEntities.forEach(function(entityB) {
		   //  		if(entityB.getComponentKeys().includes("collision")) {
		   //  			if (entityA.components.collision.collidesWith(entityB)) {
		   //  				if (entityA.components.collision.onCollision) {
					// 			entityA.components.collision.onCollision(entityB);
					// 		}
					// 		if (entityB.components.collision.onCollision) {
					// 			entityB.components.collision.onCollision(entityA);
					// 		}
					// 	}
		   //  		}
		   //  	});
		   //  }
	    // });

	    console.log(entities);

	    for(var i = 0; i < entities.length; i++) {
	    	var entityA = entities[i];
	    	if(entityA.getComponentKeys().includes("collision")) {
	    		for (var j = i + 1; j < entities.length; j++) {
	    			var entityB = entities[j];
	    			if(entityB.getComponentKeys().includes("collision")) {
		    			if(entityA.components.collision.collidesWith(entityB)) {
		    				if(entityA.components.collision.onCollision) {
					    		entityA.onCollision(entityB);
					    	}

					    	if(entityB.components.collision.onCollision) {
					    		entityB.onCollision(entityA);
					    	}
		    			}
		    		}
		    	}
	    	}
	    }
    }

    return Object.freeze({
    	run: run,
    	tick: tick,
    })

}