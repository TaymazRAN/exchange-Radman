import * as React from "react";

const Support = () => {
  return (
    <div className="compartmentBox">
      <div className="compartment support">
        <div className="data support">
          <h2> ارتباط با واحد پشتیبانی </h2>
          <p>
            تیم کارگزاری صبا جهاد تمام تلاش خود برای کسب رضایت مشتری‌های خود
            انجام‌ می‌دهد، بدین منظور تیم پشتیبانی ما به{" "}
            <span className="yellow">صورت شبانه</span> روزی در خدمت شماست
            <span className="text" style={{ textAlign: "left" }}>
              {" "}
              <h3> ۶۳۴۸۶۰۰۰ - ۰۲۱ </h3>
            </span>
          </p>
        </div>
        <div className="image support"></div>
      </div>
    </div>
  );
};

export default Support;
