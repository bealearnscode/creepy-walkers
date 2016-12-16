import React, {Component} from 'react';

export default class ScoreItem extends Component {
	render() {
		return(
			<li>
				<h2>Name: {this.props.score.from} - Score: {this.props.score.score}</h2>
			</li>
		);
	}
}