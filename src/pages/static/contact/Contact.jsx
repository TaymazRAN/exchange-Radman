import React from "react";
import TextField from "@mui/material/TextField";

const Contact = () => {
	return (
		<div className="page row">
			<div className="split">
				<h2>دفتر مرکزی</h2>
				<div className="dataBox">
					<div className="image contact1"></div>
					<div className="text">۰۲۱ - ۶۳۴۸۶۰۰۰</div>
				</div>
				<div className="dataBox">
					<div className="image contact2"></div>
					<div className="text">
						تهران، بالاتر از چهار راه ولیعصر، خیابان بزرگمهر، بعد از تقاطع
						فلسطین ، پلاک 38
					</div>
				</div>
				<div className="dataBox">
					<div className="image contact3"></div>
					<div className="text">info@sjb.co.ir</div>
				</div>
				<div className="map"></div>
			</div>
			<div className="split">
				<h2>تماس با ما</h2>
				<p>
					اگر سوالی دارید یا به کمک نیاز دارید ، در صورت تمایل با تیم ما در
					ارتباط باشید.
				</p>
				<div className="inputBox">
					<TextField
						className="input"
						label="نام و نام خانوادگی"
						variant="filled"
					/>
				</div>
				<div className="inputBox">
					<TextField
						className="input"
						label="پست الکترونیکی"
						variant="filled"
					/>
				</div>
				<div className="inputBox">
					<TextField
						className="input half"
						label="شماره همراه"
						variant="filled"
					/>
					<TextField className="input half" label="موضوع" variant="filled" />
				</div>
				<div className="inputBox">
					<TextField
						className="input"
						label="پیام خود را وارد کنید."
						variant="filled"
						multiline
						minRows={6}
						maxRows={8}
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
