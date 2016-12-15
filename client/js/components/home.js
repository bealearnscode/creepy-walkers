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

				<div class="wrapper">
    				<form class="form-start-options">
        				<h2 class="form-start-options-heading">Select an Option</h2>
        				<button class="btn btn-lg btn-primary btn-block" type="submit"><Link to={`/login`}>Login</Link></button>
        				<button class="btn btn-lg btn-primary btn-block" type="submit"><Link to={`/register`}>Register</Link></button>
        				<button class="btn btn-lg btn-primary btn-block" type="submit"><Link to={`/game`}>Game</Link></button>
    				</form>
				</div>
			</div>
		);
	}
}