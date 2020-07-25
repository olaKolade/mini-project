import React, { Fragment } from 'react';
import classes from './NavBar.css';

import { NavLink } from 'react-router-dom';

const navBar = (props) => {
	let links = null;

	if (props.isAuth) {
		links = (
			<Fragment>
			<li><NavLink to="/profile">View Profile</NavLink></li>
			<li><NavLink to="/logout">Logout</NavLink></li>
			</Fragment>
			);
	} else {
		links = (
			<Fragment>
			<li><NavLink to="/login">Login</NavLink></li>
			<li><NavLink to="/register">Register</NavLink></li>
			</Fragment>
			);
	}
	return (
	<nav className={classes.NavBar}>
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			{links}
		</ul>
	</nav>
);
	}

export default navBar;