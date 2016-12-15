import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

class Login extends Component {
	onLoginPressed(e) {
		e.preventDefault();
		this.props.dispatch(actions.signInAsync(this.refs.username.value, this.refs.password.value));
		this.refs.username.value = "";
		this.refs.password.value = "";
		//this.props.router.push('/game');
	}

	render() {
		return(
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

				<div className="wrapper">
			        <form className="form-signin">
			            <h2 className="form-signin-heading">Please login</h2>
			            <input type="text" className="form-control" ref="username" name="username" placeholder="Username" required="" autoFocus="" />
			            <input type="password" className="form-control" name="password" ref="password" placeholder="Password" required=""/>
			            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onLoginPressed.bind(this)}>Login</button>
			        </form>
			    </div>
			</div>
		);
	}
}

// let mapStateToProps = function(state, props) {
// 	return {
// 		isStarted: state.isStarted,
// 	}
// }

export default connect()(Login);