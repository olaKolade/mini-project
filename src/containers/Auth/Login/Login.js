import React, { Component } from "react";
import classes from './Login.css';

import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from '../../../store/actions/index';


class Login extends Component {

	
	state = {
		controls: {
			email: {
				type: "input",
				elementConfig: {
					placeholder: "Enter Your Email",
					type: "email",
				},
				value: ""
			},
			password: {
				type: "input",
				elementConfig:{
					placeholder: "Enter Your Password",
					type: "password",
				},
				value: ""
			}
		},
		failedLogin: false
	};

	changeHandler = (e, name) => {
		this.setState({failedLogin: false});

		const updatedControls = {
			...this.state.controls
		}

		const updatedFormControl = {
			...this.state.controls[name]
		}

		updatedFormControl.value = e.target.value;
		updatedControls[name] = updatedFormControl;

		this.setState({controls: updatedControls});
	}

	loginHandler = (e) => {
		e.preventDefault();
		const user = {};

		for (const key in this.state.controls) {
			user[key] = this.state.controls[key].value;
		}

		const index = this.props.users.findIndex(savedUser => savedUser.email === user.email);
		
		if (index >= 0) {
			const savedUser = this.props.users[index];

			if (savedUser.password === user.password) {
				this.props.onLogin(savedUser.id);
			} else {
				this.setState({failedLogin: true});
			}
			
		} else {
			this.setState({failedLogin: true});
		}
	}

	render() {
		const formElementsArr = [];
		for (const key in this.state.controls) {
			const ctr = this.state.controls[key];
			formElementsArr.push({
				id: key,
				config: ctr.elementConfig,
				type: ctr.type,
				value: ctr.value
			});
		}
		
		return (
			<div className={classes.Login}>
				<form>
				
			{/* if already authenticated, redirect to homepage */}
			{this.props.isAuth ? <Redirect to="/" /> : null}
			{this.state.failedLogin ? <div>Invalid Login, username or password not correct</div>: null}
					{
						formElementsArr.map(el => <Input 
							key={el.id}
							elementType={el.type}
							elementConfig={el.config}
							value={el.value}
							changed={(e) => this.changeHandler(e, el.id)}
						/>)
					}
				
					<Button btnType="Primary" clicked={this.loginHandler} >Login</Button>
				</form>
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.userId !== null,
		users: state.users
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (userId) => dispatch(actions.loginUser(userId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);