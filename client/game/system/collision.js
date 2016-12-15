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
	     entities.forEach(function(entityA, index) {
		    if(entityA.getComponentKeys().includes("collision")) {
		    	var slicedEntities = entities.slice(index + 1, entities.length);
		    	slicedEntities.forEach(function(entityB) {
		    		if(entityB.getComponentKeys().includes("collision")) {
		    			if (entityA.onCollision(entityB)) {
		    				//if badguy is in range of tower
		    				if((entityA.getEntityType() === "tower" && entityB.getEntityType() === "badguy") || (entityA.getEntityType() === "badguy" && entityB.getEntityType() === "tower")) {
		    					var projectile
		    					//shoot the projectile
		    					if(entityA.getComponentKeys().includes("towerLocation")) {
		    						projectile = makeProjectile({x: entityA.getXLocation(), y: entityA.getYLocation()}, {x: entityB.getXLocation() + 0.5, y: entityB.getYLocation() + 0.5})
		    						entities.push(projectile);
		    					}
		    					if(entityB.getComponentKeys().includes("towerLocation")) {
		    						projectile = makeProjectile({x: entityB.getXLocation(), y: entityB.getYLocation()}, {x: entityA.getXLocation() + 0.5, y: entityA.getYLocation() + 0.5})
		    						entities.push(projectile);
		    					}
		    				}
		    				if((entityA.getEntityType() === "projectile" && entityB.getEntityType() === "badguy") || (entityA.getEntityType() === "badguy" && entityB.getEntityType() === "projectile")) {
		    					if(entityA.getComponentKeys().includes("health")) {
		    						console.log('enemyHit')
		    						entityA.reduceHealth(1);
		    						entities.splice(entities.indexOf(entityB), 1);
		    					}
		    					if(entityB.getComponentKeys().includes("health")) {
		    						console.log('enemyhit')
		    						entityB.reduceHealth(1);
		    						entities.splice(entities.indexOf(entityA), 1);
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