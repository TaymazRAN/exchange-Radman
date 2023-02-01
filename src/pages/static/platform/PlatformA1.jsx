import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA1 = () => {
	return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment right">
					<div className="data">
						<h2>همراه پلاس</h2>
						<p>
							با همراه پلاس نیازی به نصب اپلیکیشن ندارید. اگر در زمان معاملات،
							خارج از محل کار و یا زندگی خود هستید، ما همراه پلاس را به شما
							پیشنهاد می کنیم. از طریق این سامانه به راحتی، با سرعت بالا و بدون
							نیاز به نصب اپلیکیشن، با گوشی ها و تبلت ها با سیستم عامل Android و
							iOS وارد سامانه معاملات شوید.{" "}
						</p>

						<a href="https://mobile.sjb.co.ir" rel="noreferrer" target="_blank">
							<Button className="button" variant="text" color="error">
								ورود
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
					<div className="image platform1"></div>
				</div>
			</div>
		</div>
	);
};

export default PlatformA1;
