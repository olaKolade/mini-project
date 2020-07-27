import React from "react";

import classes from './Input.css';

const input = (props) => {
	let inputElem = null;

	let cssClasses = [classes.Input];

	let errMsg = null;

	if (!props.valid && props.touched) {
		cssClasses.push(classes.Invalid);

		switch (props.name) {
			case "name":
				errMsg = <p style={{margin: "0", color: "red", fontWeight: "bold"}}>Name must be at least 10 characters</p>;
				break;
					case "email":
				errMsg = <p style={{margin: "0", color: "red", fontWeight: "bold"}}>Please enter a valid email</p>;
				break;
					case "password":
				errMsg = <p style={{margin: "0", color: "red", fontWeight: "bold"}}>Password must be at least 4 characters</p>;
				break;
		
			default:
				errMsg = null;
				break;
		}
	} 

	switch (props.elementType) {
		case 'input':
				inputElem = <input {...props.elementConfig} value={props.value} onChange={props.changed} onBlur={props.blurred}/>;
			break;
	
		default:
			inputElem =  <input {...props.elementConfig} value={props.value} onChange={props.changed} onBlur={props.blurred}/>;
			break;
	}
	
	return (
		<div className={cssClasses.join(' ')}>
			<label>{props.label}</label>
			{inputElem}
			{errMsg}
		</div>
	);
} 

export default input;