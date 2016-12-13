import makeProjectile from '../entity/projectile';

export default function collisionSystem(entities) {

	function run() {
		setInterval(tick, 1000/4); //4 frames per second
	}


	//enemy gets in range of tower radius
	//projectile entity is pushed on to the entities array
	//projectile entity moves toward the enemy
	//if enemy collides with projectile...
	//enemy loses health
	//projectile is removed from entities array




	function tick() {
     //    entities.forEach(function(entityA, index) {
		   //  if(entityA.getComponentKeys().includes("collision")) {
		   //  	var slicedEntities = entities.slice(index + 1, entities.length);
		   //  	slicedEntities.forEach(function(entityB) {
		   //  		if(entityB.getComponentKeys().includes("collision")) {
		   //  			if (entityA.onCollision(entityB)) {
		   //  				if(entityA.getEntityType() !== entityB.getEntityType()) {
		   //  					if (entityA.onCollision) {
					// 				entityA.onCollision(entityB);
					// 				if(entityA.getEntityType() === "badguy") {
					// 					//you are in range to shoot a badguy
					// 					entities.push(makeProjectile({x: 5 + 0.25, y: 5 + 0.25}));
					// 					if(entityB.getEntityType() === "projectile") {
					// 						//if the projectile collides with a badguy...
					// 						entityA.reduceHealth(1);
					// 						console.log("HEALTHA:", entityA.getHealth());
					// 					}
					// 				}
					// 			}
					// 			if (entityB.onCollision) {
					// 				entityB.onCollision(entityA);
					// 				if(entityB.getEntityType() === "badguy") {
					// 					//you are in range to shoot a badguy
					// 					if(entityA.getEntityType() === "projectile") {
					// 						//if the projectile collides with a badguy...
					// 						entityB.reduceHealth(1);
					// 						console.log("HEALTHB:", entityB.getHealth());
					// 					}
					// 				}
					// 			}
		   //  				}
		   //  				else {
		   //  					console.log("same entity type");
		   //  				}
					// 	}
		   //  		}
		   //  	});
		   //  }
	    // });



	     entities.forEach(function(entityA, index) {
		    if(entityA.getComponentKeys().includes("collision")) {
		    	var slicedEntities = entities.slice(index + 1, entities.length);
		    	slicedEntities.forEach(function(entityB) {
		    		if(entityB.getComponentKeys().includes("collision")) {
		    			if (entityA.onCollision(entityB)) {
		    				//if badguy is in range of tower
		    				if((entityA.getEntityType() === "tower" && entityB.getEntityType() === "badguy") || (entityA.getEntityType() === "badguy" && entityB.getEntityType() === "tower")) {
		    					console.log("tower collided with badguy");
		    					//shoot the projectile
		    					if(entityA.getComponentKeys().includes("towerLocation")) {
		    						entities.push(makeProjectile({x: entityA.getXLocation(), y: entityA.getYLocation()}));
		    						console.log(1);
		    					}
		    					if(entityB.getComponentKeys().includes("towerLocation")) {
		    						entities.push(makeProjectile({x: entityB.getXLocation(), y: entityB.getYLocation()}));
		    						console.log(2);
		    					}

		    				}
		    				if((entityA.getEntityType() === "projectile" && entityB.getEntityType() === "badguy") || (entityA.getEntityType() === "badguy" && entityB.getEntityType() === "projectile")) {
		    					if(entityA.getComponentKeys().includes("health")) {
		    						entityA.reduceHealth(1);
		    					}
		    					if(entityB.getComponentKeys().includes("health")) {
		    						entityB.reduceHealth(1);
		    					}
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