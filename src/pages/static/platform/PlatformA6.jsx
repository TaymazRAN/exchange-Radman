import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA6 = () => {
  return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment left">
					<div className="image platform6"></div>
					<div className="data">
						<h2>سامانه آنلاین آتی</h2>
						<p>
							با این سامانه هر آنچه را که در معاملات به آن نیاز خواهید داشت، به
							صورت یکجا به آن دسترسی دارید.{" "}
						</p>
						<a
							href="https://coinonline.sjb.co.ir"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								مطالب بیشتر
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlatformA6;
