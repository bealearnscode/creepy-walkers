import game from './game/game';

//main.js is really just going to be calling the run function from game.js

document.addEventListener("DOMContentLoaded", function() {
	game().run();
});