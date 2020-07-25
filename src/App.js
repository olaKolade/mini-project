import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./containers/Auth/Login/Login";
import Logout from "./containers/Auth/Logout/Logout";
import Register from "./containers/Auth/Register/Register";

import { connect } from 'react-redux';


function App(props) {
	let routes = null;

	if (props.isAuth) {
		routes = (
			<Switch>
				<Route path="/logout" component={Logout} />
				<Route path="/" exact component={LandingPage} />
				<Redirect to="/" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/" exact component={LandingPage} />
				<Redirect to="/" />
			</Switch>
		);
	}
  return (
		<div>
			<Layout>
				{routes}
			</Layout>
    </div>
  );
}

const mapStateToProps = state => {
	return {
		isAuth: state.userId !== null
	}
}

export default connect(mapStateToProps)(App);
