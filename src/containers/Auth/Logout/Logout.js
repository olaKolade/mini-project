import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from '../../../store/actions/actionTypes';


class Logout extends Component {
	componentWillUnmount() {
		console.log(this.props.userId);
		this.props.onLogout(this.props.userId);
	}

	render() {
		return (
			<Redirect to="/" />
			);
	}
}

const mapStateToProps = state => {
	return {
		userId: state.userId
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch({type: actionTypes.AUTH_LOGOUT})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);