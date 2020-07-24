import React, { Component } from 'react';

import classes from './Layout.css';
import Aside from "./../../components/Aside/Aside";
import Navigation from '../../components/Navigation/Navigation';


class Layout extends Component{

	render() {
		return (
			<div className={classes.Layout}>
				<Navigation />
				<header>
					<h1>Welcome to a react project</h1>
				</header>
				<main>
					<Aside />
					<section>
						{this.props.children}
					</section>
				</main>
			</div>
		);
	}
}

export default Layout;