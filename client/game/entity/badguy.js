import badGuyMovementComponent from '../component/badguy-movement';
import makeBadGuyGraphicComponent from '../component/badguy-graphic';
import makeLevelMapComponent from '../component/map';
import pathfinder from '../component/pathfinder';

export default function makeBadGuy() {

	console.log("Creating bad guy entity");
	var badguy = {};
	var graphics = makeBadGuyGraphicComponent({
		whiteWalker: 'assets/img/enemies/white-walker-left.png'
	});
	var spawnLocation = {x: 100, y: 100};
	var map = makeLevelMapComponent().map;
	var path = pathfinder(map).path();
	console.log(path);
	var badGuyMoves = badGuyMovementComponent();

	var components = {
		graphics: graphics,
		spawnLocation: spawnLocation,
		path: path,
		badGuyMoves: badGuyMoves,
	};


	badguy.getXLocation = function() {
		return components.spawnLocation.x;
	};

	badguy.getYLocation = function() {
		return components.spawnLocation.y;
	};

	badguy.getPath = function() {
		return components.path
	}

	badguy.getComponentKeys = function() {
		return Object.keys(components);
	};

	badguy.draw = function(ctx) {
		components.graphics.drawBadGuy(ctx,path);
	};

	return Object.freeze(badguy);
}