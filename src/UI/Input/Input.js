import React from "react";

import classes from './Input.css';

const input = (props) => {
	let inputElem = null;

	switch (props.elementType) {
		case 'input':
				inputElem = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
			break;
	
		default:
			inputElem =  <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
			break;
	}
	
	return (
		<div className={classes.Input}>
			<label>{props.label}</label>
			{inputElem}
		</div>
	);
} 

export default input;