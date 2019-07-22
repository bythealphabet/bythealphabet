import React from "react";

const textArea = ({input}) => {
	
	return (
		<div className="field">
			<textarea
				{...input}
				className="textarea"
				placeholder="write HTML"
				rows={10}
			></textarea>
		</div>
	);
};

export default textArea;
