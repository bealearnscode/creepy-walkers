import React, {Component} from 'react';

export default class Register extends Component {
	onRegisterPressed(e) {
		e.preventDefault();
		//dispatch an action here
		this.props.router.push('/');
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
			            <h2 className="form-signin-heading">Please Register</h2>
			            <input type="text" className="form-control" name="username" placeholder="Username" required="" autoFocus="" />
			            <input type="password" className="form-control" name="password" placeholder="Password" required=""/>
			            <input type="password" className="form-control" name="confirm-password" placeholder="Confirm Password" required=""/>
			            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onRegisterPressed.bind(this)}>Register</button>
			        </form>
			    </div>
			</div>
		);
	}
}