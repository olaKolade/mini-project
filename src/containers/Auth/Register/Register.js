import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from '../../../store/actions/index';
import classes from './Register.css';

import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";


class Register extends Component {

	state = {
		controls: {
			name: {
				type: "input",
				elementConfig: {
					placeholder: "Enter Your Name",
					type: "text",
				},
				value: ""
			},
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
		}
	};

	registerHandler = (e) => {
		e.preventDefault();

		const user = {}
		for (const key in this.state.controls) {
			user[key] = this.state.controls[key].value
		}

		this.props.onRegisterUser(user);

	}

	changeHandler = (e, name) => {
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
					{
						formElementsArr.map(el => <Input 
							key={el.id}
							elementType={el.type}
							elementConfig={el.config}
							value={el.value}
							changed={(e) => this.changeHandler(e, el.id)}
						/>)
					}
				
					<Button btnType="Primary" clicked={this.registerHandler} >Register</Button>
				</form>
			</div>
			);
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onRegisterUser: (user) => dispatch(actions.registerUser(user))
	}
}

export default connect(null, mapDispatchToProps)(Register);