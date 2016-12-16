import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

export default class Home extends Component {
	render() {
		return (
			<div className="top-level-component">
				<header>
					<div id="row">
		                <div className="col-12">
		                    <div className="intro">
		                        <h1>Game of Towers</h1>
		                    </div>
		                </div>
		            </div>
				</header>

				<div className="wrapper">
    				<form className="form-start-options">
        				<h2 className="form-start-options-heading">Select an Option</h2>
        				<button className="btn btn-lg btn-primary btn-block"><Link to={`/login`}>Login</Link></button>
        				<button className="btn btn-lg btn-primary btn-block"><Link to={`/register`}>Register</Link></button>
        				<button className="btn btn-lg btn-primary btn-block"><Link to={`/game`}>Game</Link></button>
        				<button className="btn btn-lg btn-primary btn-block"><Link to={`/highscores`}>High Scores</Link></button>
    				</form>
				</div>
			</div>
		);
	}
}