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
		const startButtonText = !this.props.isStarted ? (text = "Start Game") : (text = "Restart");
		return (
			<div>
				<canvas id="canvas"></canvas>
				<button id="start-game" className="btn btn-sm btn-primary btn-block" onClick={this.onStartPressed.bind(this)}>{text}</button>
				<button id="go-home" className="btn btn-sm btn-primary btn-block" onClick={this.onHomeClick.bind(this)}>Home</button>
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