import React from "react";

const input = (props) => {
	let inputElem = null;

	switch (props.inputtype) {
		case 'input':
				inputElem = <input {...props} />;
			break;
	
		default:
			inputElem =  <input {...props} />;
			break;
	}
	
	return (
		<div>
			<label>{props.label}</label>
			{inputElem}
		</div>
	);
} 

export default input;