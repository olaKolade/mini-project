import React from 'react';

import classes from './Navigation.css';
import NavBar from './NavBar/NavBar';

const navigation = (props) => (
	<div className={classes.Navigation}>
		<div>Logo</div>
		<NavBar isAuth={props.isAuth} />
	</div>
);

export default navigation;