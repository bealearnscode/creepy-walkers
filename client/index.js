import game from './game/game';
import main from './maps/main';
//main.js is really just going to be calling the run function from game.js

document.addEventListener("DOMContentLoaded", function() {
	game().run();
});