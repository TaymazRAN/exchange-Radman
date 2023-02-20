import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const BoardMembers = () => {
  return (
    <div className="accordionContainer">
      <div className="fullImage about"></div>
      <h2 className="">اعضای هیئت مدیره</h2>
      <Accordion className="customAccordion">
        <Typography>
          <div className="customAnswer">
            <div className="personContainer">
              {/* <div className="personCard">
                <div className="image mahnush"></div>
                <div className="title">خانم مهنوش کریم</div>
                <div className="role">عضو هیات‌ مدیره</div>
              </div> */}
              <div className="personCard">
                <div className="image alireza"></div>
                <div className="title">آقای علیرضا مرادی</div>
                <div className="role">مدیرعامل و نایب رئیس هیات مدیره</div>
              </div>
              <div className="personCard">
                <div className="image ali"></div>
                <div className="title">آقای علی صلاحی نژاد</div>
                <div className="role">رئیس هیات مدیره</div>
              </div>
            </div>
          </div>
        </Typography>
      </Accordion>
    </div>
  );
};

export default BoardMembers;
