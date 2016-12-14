var React = require("react");
var Link = require('react-router').Link;
var game = require("./game/game");

var CanvasComponent = React.createClass({
    render: function(){
        return (
            <div>
                <canvas id="canvas"></canvas>
                <button id="play-button" refs="play-button" type="submit">Play</button>
            </div>
    )}
});

module.exports = CanvasComponent;
document.addEventListener("DOMContentLoaded", function() {
	game().run()
}); 