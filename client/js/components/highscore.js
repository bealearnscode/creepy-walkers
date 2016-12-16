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
		console.log(this.props.highScores);
		return(
			<div>
				<h1>High Scores</h1>
				<ul>
					{this.props.highScores.map((score, index) => <ScoreItem key={index} index={index} score={score} />)}
				</ul>
				<button className="btn btn-lg btn-primary btn-block" onClick={this.onHomeClick.bind(this)}>Home</button>
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