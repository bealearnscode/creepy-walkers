import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';

export default class Home extends Component {
	render() {
		return (
			<div>
				<header>
					<div id="row">
		                <div className="col-12">
		                    <div className="intro">
		                        <h1>Game of Towers</h1>
		                    </div>
		                </div>
		            </div>
				</header>

				<p><Link to={`/login`}>Login</Link></p>
                <p><Link to={`/register`}>Register</Link></p>
                <p><Link to={`/game`}>Game</Link></p>
			</div>
		);
	}
}