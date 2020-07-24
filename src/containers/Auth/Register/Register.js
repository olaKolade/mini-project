import React, { Component } from "react";

import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";


class Register extends Component {

	state = {
		
	};

	render() {
		return (
			<form>
				<Input inputtype="input" type="text" placeholder="Enter Your Name" />
				<Input inputtype="input" type="email" placeholder="Enter Your Email" />
				<Button btnType="Primary">Register</Button>
			</form>
			);
	}
}

export default Register;