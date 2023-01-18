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
                  <a href="/">معرفی صبا جهاد</a>
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
                  <Link to="/static/servicesA1"> معرفی بورس اوراق بهادار </Link>
                  <Link to="/static/servicesA2"> سامانه معاملات</Link>
                  <a href="/">فرم های مورد نیاز</a>
                  <a href="/">سوالات متداول</a>
                </div>
                <div className="d-column">
                  <h3>بورس کالا</h3>
                  <a href="/">معرفی بورس کالا</a>
                  <a href="/">
                    مدارک مورد نیاز جهت صدور کد مشتریان بازار فیزیکی
                  </a>
                  <a href="/">خدمات کارگزاری</a>
                  <a href="/">نحوه درخواست پذیرش عرضه</a>
                  <a href="/">نمای بازار</a>
                </div>
                <div className="d-column">
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
                <div className="d-column">
                  <h3>بورس انرژی</h3>
                  <a href="/">معرفی بورس انرژی ایران</a>
                  <a href="/">منابع بورس انرژی ایران</a>
                  <a href="/">مزایای پذیرش و معامله در بورس انرژی ایران</a>
                  <a href="/">عرضه‌کنندگان عمده در بورس انرژی ایران</a>
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
                  <a href="/">سرمایه‌گذاری کم ریسک</a>
                  <a href="/">سرمایه‌گذاری با تقسیم سود ماهانه</a>
                  <a href="/">
                    سرمایه‌گذاری وجوه بیکار برای دوره‌های کوتاه مدت
                  </a>
                </div>
                <div className="d-column">
                  <a href="/">سرمایه‌گذاری تدریجی با مبالغ کم</a>
                  <a href="/">سرمایه‌گذاری اسلامی</a>
                  <a href="/">سرمایه‌گذاری اختصاصی شما</a>
                </div>
                <div className="d-column">
                  <a href="/">سرمایه‌گذاری در طلا</a>
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
