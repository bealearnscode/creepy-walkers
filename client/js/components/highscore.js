import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import ScoreItem from './score-item';

class HighScore extends Component {
	componentWillMount() {
		this.props.dispatch(actions.fetchHighScores());
		// console.log(this.props.currentUser);
		// console.log(this.props.currentPass);
		console.log(this.props.highScores);
	}

	render() {
		return(
			<div>
				<h1>High Scores</h1>
				<ul>
					{this.props.highScores.map((score, index) => <ScoreItem key={index} index={index} score={score} />)}
				</ul>
			</div>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		currentUser: state.currentUser,
		currentPass: state.currentPass,
		highScores: state.highScores,
	}
}

export default connect(mapStateToProps)(HighScore);