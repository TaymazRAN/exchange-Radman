import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Branch = () => {
  return (
    <div className="page">
      <h2>شعب و دفاتر</h2>
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="customQuestion">
              شعبه تهران (تالار بزرگمهر)
              <div className="customBorder"></div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="customAnswer">
                <ul>
                  <li>
                    <b>نام مدیر:</b>آقای ابوالفضل ابراهیم زاده
                  </li>
                  <li>
                    <b>نشانی:</b>خیابان ولیعصر، خیابان بزرگمهر، بعد از تقاطع
                    فلسطین، پلاک 38
                  </li>
                  <li>
                    <b>تلفن:</b>۶۳۴۸۶۰۰ - ۰۲۱
                  </li>
                  <li>
                    <b>فکس:</b>۶۳۴۸۶۰۰ - ۰۲۱
                  </li>
                  <li>
                    <b>مسئول شعبه:</b>علی محمدی
                  </li>
                  <li>
                    <b>معامله‌گر:</b>محمد علی‌زاده
                  </li>
                  <li>
                    <b>پذیرش:</b>فاطمه بیات
                  </li>
                </ul>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Branch;
