import React, { Component } from "react";
import classes from './Login.css';

import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";


class Login extends Component {

	state = {
		
	};

	loginHandler = (e) => {
		e.preventDefault();

		
	}

	render() {
		return (
			<div className={classes.Login}>
				<form>
					<Input inputtype="input" type="email" placeholder="Enter Your Email" />
					<Input inputtype="input" type="password" placeholder="Enter Your Password" />
					<Button btnType="Primary" clicked={this.loginHandler} >Login</Button>
				</form>
			</div>
			);
	}
}

export default Login;