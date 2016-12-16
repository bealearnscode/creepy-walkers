import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

class Register extends Component {
	onRegisterPressed(e) {
		e.preventDefault();
		if(this.refs.password.value === this.refs.confirmPassword.value) {
			this.props.dispatch(actions.registerUserAsync(this.refs.username.value, this.refs.password.value));
			console.log("passwords match. User registered");
			this.props.router.push('/');
		}
		else {
			console.log("passwords do not match");
		}
		this.refs.username.value = "";
		this.refs.password.value = "";
		this.refs.confirmPassword.value = "";
	}

	render() {
		return(
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
			        <form className="form-signin">
			            <h2 className="form-signin-heading">Please Register</h2>
			            <input type="text" className="form-control" ref="username" name="username" placeholder="Username" required="" autoFocus="" />
			            <input type="password" className="form-control" ref="password" name="password" placeholder="Password" required=""/>
			            <input type="password" className="form-control" ref="confirmPassword" name="confirm-password" placeholder="Confirm Password" required=""/>
			            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onRegisterPressed.bind(this)}>Register</button>
			        </form>
			    </div>
			</div>
		);
	}
}

export default connect()(Register);