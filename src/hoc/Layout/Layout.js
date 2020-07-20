import React, { Component } from 'react';
import { Route } from "react-router-dom";

import classes from './Layout.css';
import LandingPage from "./../../components/LandingPage/LandingPage";
import Aside from "./../../components/Aside/Aside";
import NavBar from './../../components/NavBar/NavBar';

class Layout extends Component{

	render() {
		return (
			<div className={classes.Layout}>
				<NavBar />
				<header>
					<h1>Welcome to a react project</h1>
				</header>
				<main>
					<Aside />
					<section>

						<Route path="/" exact component={LandingPage} />
					</section>
				</main>
			</div>
		);
	}
}

export default Layout;