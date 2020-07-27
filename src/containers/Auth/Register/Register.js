import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from '../../../store/actions/index';
import classes from './Register.css';

import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import { Redirect } from "react-router-dom";


class Register extends Component {

	state = {
		controls: {
			name: {
				type: "input",
				elementConfig: {
					placeholder: "Enter Your Name",
					type: "text",
				},
				validation: {
					required: true,
					minLength: 10
				},
				valid: false,
				touched: false,
				value: ""
			},
			email: {
				type: "input",
				elementConfig: {
					placeholder: "Enter Your Email",
					type: "email",
				},
				validation: {
					required: true,
					mail: true
				},
				valid: false,
				touched: false,
				value: ""
			},
			password: {
				type: "input",
				elementConfig:{
					placeholder: "Enter Your Password",
					type: "password",
				},
				validation: {
					required: true,
					minLength: 4
				},
				valid: false,
				touched: false,
				value: ""
			}
		}
	};

	registerHandler = (e) => {
		e.preventDefault();
		let validForm = true;

		const user = {}
		for (const key in this.state.controls) {
			const control = this.state.controls[key];
			if(control.valid === false) {
				validForm = false;
				break;
			}

			user[key] = control.value
		}

		if (validForm) {
			user.id = this.props.users.length + 1;
			this.props.onRegisterUser(user);
		} else {
			alert('Please fill all fields correctly');
		}
	}

	changeHandler = (e, name) => {
		const updatedControls = {
			...this.state.controls
		}

		const updatedFormControl = {
			...this.state.controls[name]
		}

		updatedFormControl.value = e.target.value;
		updatedFormControl.valid = true;
		updatedControls[name] = updatedFormControl;

		this.setState({controls: updatedControls});
	}

	blurredHandler = (e, name) => {
		const updatedControls = {
			...this.state.controls
		}

		const updatedFormControl = {
			...this.state.controls[name]
		}

		updatedFormControl.valid = this.validate(updatedFormControl.validation, e.target.value);
		updatedFormControl.touched = true;
		updatedControls[name] = updatedFormControl;

		this.setState({controls: updatedControls});
	}

	validate = (rules, value) => {
		let isValid = true;
		value = value.trim();

		if (rules.required) {
			isValid = value !== '' && isValid;
		}

		if(rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if(rules.mail) {
			isValid = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) && isValid;
		}

		return isValid;
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
			<div className={classes.Register}>
				<form>
				
			{/* if already authenticated, redirect to homepage */}
			{this.props.isAuth ? <Redirect to="/" /> : null}
					{
						formElementsArr.map(el => <Input 
							key={el.id}
							name={el.id}
							elementType={el.type}
							elementConfig={el.config}
							value={el.value}
							changed={(e) => this.changeHandler(e, el.id)}
							blurred={(e) => this.blurredHandler(e, el.id)}
							valid={this.state.controls[el.id].valid}
							touched={this.state.controls[el.id].touched}
						/>)
					}
				
					<Button btnType="Primary" clicked={this.registerHandler} >Register</Button>
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
		onRegisterUser: (user) => dispatch(actions.registerUser(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);