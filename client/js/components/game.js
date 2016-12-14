import React, {Component} from 'react';
import {connect} from 'react-redux';
import theGame from '../../game/game';
import * as actions from '../redux/actions';

class Game extends Component {
	onStartPressed() {
		theGame().run();
		this.props.dispatch(actions.isGameStarted(true));
	}

	render() {
		let text = "";
		const startButtonText = !this.props.isStarted ? (text = "Start Game") : (text = "Restart");
		return (
			<div>
				<canvas id="canvas"></canvas>
				<button id="start-game" onClick={this.onStartPressed.bind(this)}>{text}</button>
			</div>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		isStarted: state.isStarted,
	}
}

export default connect(mapStateToProps)(Game);