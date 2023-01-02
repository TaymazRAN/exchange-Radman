import React from "react";
import { Button } from "@mui/material";

const SuperMenu = () => {
	return (
		<>
			<nav class="navbar">
				<div class="d">
					<Button className="button d-btn" variant="text" color="error">
						خدمات
					</Button>
					<div className="d-content">
						<div className="row">
							<div className="column">
								<h3>بورس اوراق بهادار</h3>
								<a href="/">معرفی بورس اوراق بهادار</a>
								<a href="/">سامانه معاملات</a>
								<a href="/">فرم های مورد نیاز</a>
								<a href="/">سوالات متداول</a>
							</div>
							<div className="column">
								<h3>بورس کالا</h3>
								<a href="/">معرفی بورس کالا</a>
								<a href="/">مدارک مورد نیاز جهت صدور کد مشتریان بازار فیزیکی</a>
								<a href="/">خدمات کارگزاری</a>
								<a href="/">نحوه درخواست پذیرش عرضه</a>
								<a href="/">نمای بازار</a>
							</div>
							<div className="column">
								<h3>آتی کالا</h3>
								<a href="/">آتی صندوق طلا</a>
								<a href="/">معرفی آتی‌ کالا</a>
								<a href="/">مشاوره رایگان</a>
								<a href="/">اخذ کد بازار مشتقه</a>
								<a href="/">ورود به سامانه آتی‌سهام</a>
								<a href="/">ورود به سامانه آتی کالا</a>
								<a href="/">سوالات متداول</a>
								<a href="/">مشاهده آنلاین نمای بازار آتی کالا</a>
							</div>
							<div className="column">
								<h3>بورس انرژی</h3>
								<a href="/">معرفی بورس انرژی ایران</a>
								<a href="/">منابع بورس انرژی ایران</a>
								<a href="/">مزایای پذیرش و معامله در بورس انرژی ایران</a>
								<a href="/">عرضه‌کنندگان عمده در بورس انرژی ایران</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SuperMenu;
