import * as React from "react";

export default function Trophies() {
	return (
		<div className="cardBox">
			<div className="cards">
				<div className="card trophy">
					<div className="sign one"></div>
					<h3 className="titleNum">1</h3>
					<p className="titleDescription">اولین</p>
					<p className="description">اولین سبد گردان کشور</p>
				</div>

				<div className="card trophy">
					<div className="sign two"></div>
					<h3 className="titleNum">3</h3>
					<p className="titleDescription">سومین</p>
					<p className="description">رتبه در کل ارزش کل معاملات</p>
				</div>

				<div className="card trophy">
					<div className="sign three"></div>
					<h3 className="titleNum">+34</h3>
					<p className="titleDescription">هزار میلیارد</p>
					<p className="description">ارزش دارایی تحت مدیریت</p>
				</div>

				<div className="card trophy">
					<div className="sign four"></div>
					<h3 className="titleNum">15</h3>
					<p className="titleDescription">صندوق</p>
					<p className="description">تعداد صندوق‌های سرمایه‌گذاری</p>
				</div>
			</div>
		</div>
	);
}
