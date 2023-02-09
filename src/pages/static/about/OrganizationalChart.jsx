import React from "react";

import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const OrganizationalChart = () => {
  return (
    <>
      <div className="accordionContainer">
        <h2 className=""> مدیران</h2>
        <Accordion className="customAccordion">
          <Typography>
            <div className="customAnswer">
              <div className="personContainer">
                <div className="personCard">
                  <div className="image mohamad"></div>
                  <div className="title">آقای محمد طهرانی</div>
                  <div className="role">مدیر امور اداری</div>
                </div>
                <div className="personCard">
                  <div className="image abolfazl"></div>
                  <div className="title">آقای ابوالفضل ابراهیم زاده</div>
                  <div className="role">مدیر معاملات اوراق بهادار</div>
                </div>
                <div className="personCard">
                  <div className="image milad"></div>
                  <div className="title">آقای میلاد کلهری</div>
                  <div className="role">مدیر معاملات بورس کالا </div>
                </div>
                <div className="personCard">
                  <div className="image noperson"></div>
                  <div className="title">آقای مسعود مسافرچی</div>
                  <div className="role">مدیر شعب</div>
                </div>
                {/* <div className="personCard">
                  <div className="image salman"></div>
                  <div className="title">آقای سلمان سلمانی</div>
                  <div className="role">مدیرمالی</div>
                </div> */}
                {/* <div className="personCard">
                  <div className="image vahid"></div>
                  <div className="title">آقای وحید قاسمی</div>
                  <div className="role">مدیر حراست</div>
                </div> */}
              </div>
            </div>

            <div className="page">
              <h2> چارت سازمانی </h2>
              <div className="accordionContainer">
                <div className="fullImage clong long chart"></div>
              </div>
            </div>
          </Typography>
        </Accordion>
      </div>
    </>
  );
};

export default OrganizationalChart;
