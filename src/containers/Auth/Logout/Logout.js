import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Logout extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<Redirect to="/" />
			);
	}
}

export default Logout;