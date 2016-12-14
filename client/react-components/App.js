var React = require("react");
var Link = require("react-router").Link;
var connect = require("react-redux").connect;
var CanvasComponent = require("canvas-game-component");

var App = React.createClass = ({
    onSubmit: function (e){
        e.prevent.default();
        
    },
    
    render: function(){
        return (
            <CanvasComponent />
        );
    }
})

function mapStateToProps(state) {
    return {
        
    }
}