import React from "react";

const Holder = ({ height }) => {
	return <div style={{ height, width: "100%", zIndex: -2 }}></div>;
};

export default Holder;
