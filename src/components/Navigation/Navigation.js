import React from 'react';

import classes from './Navigation.css';
import NavBar from './NavBar/NavBar';

const navigation = () => (
	<div className={classes.Navigation}>
		<div>Logo</div>
		<NavBar />
	</div>
);

export default navigation;