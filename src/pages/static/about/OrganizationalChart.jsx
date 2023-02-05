import React from "react";

const OrganizationalChart = () => {
  return (
    <div className="page">
      <h2> چارت سازمانی </h2>
      <div className="accordionContainer">
        <div className="fullImage about2"></div>

        <div className="fullImage clong long chart"></div>
        <div className="viewCardContainer">
          <div className="viewCard">
            <div className="top">
              <div className="role">چشم‌انداز</div>
              <div className="image view1"></div>
            </div>
            مرجع پیشرو و سرآمد در صنعت خدمات مالی و سرمایه گذاری با ارائه
            راهکارهای تخصصی و روزآمد مالی در راستای بهینه سازی تصمیمات مالی با
            افق سال 1400
          </div>
          <div className="viewCard">
            <div className="top">
              <div className="role">ماموریت</div>
              <div className="image view2"></div>
            </div>
            شرکتی است دانشی و روزآمد که با رویکرد تبلور دانش مالی در
            ارزش‌آفرینی، با تکیه بر سرمایه انسانی متخصص و با هدف ارائه راهکارهای
            تخصصی مالی در صنعت واسطه گری مالی و بنگاه داری (بازار سرمایه، بازار
            پول و هلدینگ ها) فعالیت می کند.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
