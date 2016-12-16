import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import ScoreItem from './score-item';

class HighScore extends Component {
	componentWillMount() {
		this.props.dispatch(actions.fetchHighScores());
	}

	onHomeClick() {
		this.props.router.push('/');
	}

	render() {
		return(
			<div className="top-level-component">
				<h1 className="high-scores">High Scores</h1>
				<ul>
					{this.props.highScores.map((score, index) => <ScoreItem key={index} index={index} score={score} />)}
				</ul>
				<button className="btn btn-sm btn-primary btn-block" onClick={this.onHomeClick.bind(this)}>Home</button>
			</div>
		);
	}
}

let mapStateToProps = function(state, props) {
	return {
		highScores: state.highScores,
	}
}

export default connect(mapStateToProps)(HighScore);