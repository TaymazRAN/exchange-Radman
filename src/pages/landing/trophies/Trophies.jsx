import * as React from "react";

export default function Trophies() {
	return (
		<div className="cardBox">
			<div className="cards">
				<div className="card trophy">
					<div className="sign one"></div>
					<h3 className="titleNum">9</h3>
					<p className="titleDescription">شعبه</p>
					<p className="description">شعب فعال</p>
				</div>

				<div className="card trophy">
					<div className="sign two"></div>
					<h3 className="titleNum">10</h3>
					<p className="titleDescription">سهم</p>
					<p className="description">بازارگردانی سهام در بازار سرمایه</p>
				</div>

				<div className="card trophy">
					<div className="sign three"></div>
					<h3 className="titleNum">+1</h3>
					<p className="titleDescription">تریلیون ریال</p>
					<p className="description">سرمایه شرکت</p>
				</div>

				<div className="card trophy">
					<div className="sign four"></div>
					<h3 className="titleNum">10</h3>
					<p className="titleDescription">مجوز</p>
					<p className="description">مجوزهای فعالیت</p>
				</div>
			</div>
		</div>
	);
}
