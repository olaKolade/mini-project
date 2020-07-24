import React from 'react';
import classes from './NavBar.css';

const navBar = () => (
	<nav className={classes.NavBar}>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/login">Login</a></li>
			<li><a href="/register">Register</a></li>
		</ul>
	</nav>
);

export default navBar;