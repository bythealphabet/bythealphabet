import React from "react";

const input = ({input}) => {
	// console.log('props:',input)
	return (
		<div className="field">
			<input
				
				{...input}
				className={`input is-large`}
				placeholder={input.name}
			/>
		</div>
	);
};

export default input;
