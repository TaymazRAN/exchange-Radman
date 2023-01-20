import React from "react";

const Divider = ({ centered }) => {
	return (
		<div className={`dividerC ${centered && "centered"}`}>
			<div className="borderC"></div>
		</div>
	);
};

export default Divider;
