import React, {Component} from 'react';
import {connect} from 'react-redux';
import theGame from '../../game/game';
import * as actions from '../redux/actions';

class Game extends Component {
	onStartPressed() {
		theGame().run();
		this.props.dispatch(actions.isGameStarted(true));
	}

	onHomeClick() {
		this.props.router.push('/');
	}

	render() {
		let text = "";
		const startButton = !this.props.isStarted ? (<button id="start-game" onClick={this.onStartPressed.bind(this)}>Start Game</button>) : (null);
		return (
			<div className="top-level-component">
				<canvas id="canvas"></canvas>

		
				<button id="go-home"  onClick={this.onHomeClick.bind(this)}>Home</button>
				{startButton} 
				<audio id="enemy_death" src="assets/audio/enemy_died.wav"></audio>
				<audio id="victory_wave" src="assets/audio/victory.wav"></audio>
				<audio id="theme_song" src="assets/audio/theme.wav"></audio>

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