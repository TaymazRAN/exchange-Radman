import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link, useNavigate } from "react-router-dom";

const SuperMenu = () => {
	const navigate = useNavigate();

	return (
		<>
			<nav class="d-navbar">
				<div className="d">
					<Button
						className="button"
						variant="text"
						color="error"
						onClick={(event) => navigate("/")}
					>
						صفحه نخست
					</Button>
				</div>
				<div className="d">
					<Button className="button" variant="text" color="error">
						درباره ما
						<KeyboardArrowDownRoundedIcon className="superArrow" />
					</Button>
					<div className="d-content-container">
						<div className="d-content">
							<div className="d-row">
								<div className="d-column">
									<Link to="/static/Presentation"> معرفی صبا جهاد</Link>
									<Link to="/static/BoardMembers"> اعضای هیئت مدیره </Link>
									<Link to="/static/MessageOfHead"> پیام مدیر عامل </Link>
								</div>
								<div className="d-column">
									<Link to="/static/OrganizationalChart">
										چارت سازمانی و معرفی مدیران
									</Link>
									<Link to="/static/Vision"> چشم انداز و مأموریت </Link>
									<Link to="/static/Permissions"> مجوزات و افتخارت </Link>
								</div>
								<div className="d-column">
									<Link to="/static/Responsibility"> مسئولیت اجتماعی </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="d">
					<Button className="button d-btn" variant="text" color="error">
						خدمات
						<KeyboardArrowDownRoundedIcon className="superArrow" />
					</Button>
					<div className="d-content-container">
						<div className="d-content">
							<div className="d-row">
								<div className="d-column">
									<h3>بورس اوراق بهادار</h3>
									<Link to="/static/ServicesA1"> معرفی بورس اوراق بهادار </Link>
									<Link to="/static/darkhast"> نحوه درخواست پذیرش عرضه </Link>
									<Link to="/static/ServicesA2"> سامانه معاملات</Link>
									<Link to="/static/ServicesA3"> فرم های مورد نیاز </Link>
									<Link to="/static/servicesA4"> سوالات متداول</Link>
								</div>
								<div className="d-column">
									<h3>بورس کالا</h3>
									<Link to="/static/ServicesB1"> معرفی بورس کالا </Link>
									<Link to="/static/ServicesB2">
										{" "}
										مدارک مورد نیاز جهت صدور کد مشتریان بازار فیزیکی{" "}
									</Link>
									<Link to="/static/ServicesB3"> خدمات کارگزاری </Link>
									<Link to="/static/ServicesB4"> نمای بازار </Link>
								</div>
								<div className="d-column">
									<h3>آتی کالا</h3>
									<Link to="/static/ServicesC1"> آتی صندوق طلا</Link>
									<Link to="/static/ServicesC2"> معرفی آتی‌ کالا </Link>
									<Link to="/static/ServicesC3"> مشاوره رایگان </Link>
									<Link to="/static/ServicesC4"> اخذ کد بازار مشتقه </Link>
									<Link to="/static/ServicesC5"> ورود به سامانه آتی‌سهام </Link>
									<Link
										to="/static/ServicesC6
                  "
									>
										{" "}
										ورود به سامانه آتی کالا
									</Link>
									<Link to="/static/ServicesC7"> سوالات متداول</Link>
									<Link to="/static/ServicesC8">
										{" "}
										مشاهده آنلاین نمای بازار آتی کالا{" "}
									</Link>
								</div>
								<div className="d-column">
									<h3>بورس انرژی</h3>

									<Link to="/static/ServicesD1"> معرفی بورس انرژی ایران</Link>
									<Link to="/static/ServicesD2"> منابع بورس انرژی ایران </Link>
									<Link to="/static/ServicesD3">
										مزایای پذیرش و معامله در بورس انرژی ایران{" "}
									</Link>
									<Link to="/static/ServicesD4">
										{" "}
										عرضه‌کنندگان عمده در بورس انرژی ایران
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d">
					<Button className="button" variant="text" color="error">
						پلتفرم های معاملاتی
						<KeyboardArrowDownRoundedIcon className="superArrow" />
					</Button>
					<div className="d-content-container">
						<div className="d-content">
							<div className="d-row">
								<div className="d-column">
									<Link to="/static/PlatformA1">همراه پلاس</Link>
									<Link to="/static/PlatformA2">سامانه فروش سهام عدالت</Link>
									<Link to="/static/PlatformA3">آنلاین پلاس</Link>
								</div>
								<div className="d-column">
									<Link to="/static/PlatformA4">همراه تریدر آتی</Link>
									<Link to="/static/PlatformA5">سرمایه‌گذاری اسلامی</Link>
									<Link to="/static/PlatformA6">سامانه آنلاین آتی</Link>
								</div>
								<div className="d-column">
									<Link to="/static/PlatformA7">
										سامانه معاملات اینترنتی (آفلاین)
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d">
					<Button className="button" variant="text" color="error">
						بلاگ
					</Button>
				</div>
				<div className="d">
					<Button className="button" variant="text" color="error">
						ارتباط با ما
						<KeyboardArrowDownRoundedIcon className="superArrow" />
					</Button>
					<div className="d-content-container">
						<div className="d-content">
							<div className="d-row">
								<div className="d-column">
									<Link to="/static/contact">تماس با ما</Link>
									<Link to="/static/branch">شعب و دفاتر</Link>
								</div>
								<div className="d-column">
									<Link to="/static/Account"> شماره حساب ها</Link>
									<Link to="/static/Support"> تماس با پشتیبانی</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SuperMenu;
