import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSmall = (props) => {
	return (
		<span
			style={
				props.noMargin
					? {
							marginRight: "0",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
					  }
					: {
							marginRight: "15px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
					  }
			}
		>
			<CircularProgress size="1.5rem" />
		</span>
	);
};

export default LoadingSmall;
