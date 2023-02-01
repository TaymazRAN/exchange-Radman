import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA2 = () => {
  return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment left">
					<div className="image platform2"></div>
					<div className="data">
						<h2>سامانه فروش سهام عدالت</h2>
						<p>
							اگر سهام عدالت به شما تعلق گرفته و نسبت به آزاد سازی آن اقدام
							نموده اید، می توانید بدون دریافت کد بورسی و بدون مراجعه حضوری به
							کارگزاری، نسبت به فروش آن اقدام نمایید.{" "}
						</p>
						<a
							href="https://sjbse.etadbir.com/login.html"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								فروش
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlatformA2;
