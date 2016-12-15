//import theGame from './game/game';

// document.addEventListener("DOMContentLoaded", function() {
// 	game().run();
// });


//browserhistory or hashhistory?

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import Home from './js/components/home';
import Login from './js/components/login';
import Register from './js/components/register';
import Game from './js/components/game';
import Highscore from './js/components/highscore';

import store from './js/redux/store';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path="/game" component={Game} />
			<Route path="/highscores" component={Highscore} />
		</Router>
		</Provider>,
		document.getElementById('app')
	);
});