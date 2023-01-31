import "./sideBarAdmin.css";
import React from "react";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
// import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
// import QuizIcon from "@mui/icons-material/Quiz";
// import BiotechIcon from "@mui/icons-material/Biotech";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AppsIcon from "@mui/icons-material/Apps";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
// import InventoryIcon from "@mui/icons-material/Inventory";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";

export default function SideBarAdmin() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    boxShadow: "0 2px 5px #dddddd",
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent",
    },
  };

  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> داشبورد ادمین </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <NavLink
                to="/admin/"
                activeclassname="active"
                className="sideBarListItem"
              >
                <HomeRoundedIcon className="sideBarIcon" />
                داشبورد
              </NavLink>
              {/* <li className="sideBarListItem">
                <PersonOutlineIcon className="sideBarIcon" />
                مدیریت پروفایل
              </li> */}
              <NavLink
                to="/admin/menu"
                activeclassname="active"
                className="sideBarListItem"
              >
                <WidgetsRoundedIcon className="sideBarIcon" />
                درباره ما{" "}
              </NavLink>
              <NavLink
                to="/admin/manager"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                manager
              </NavLink>
              <NavLink
                to="/admin/user"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                پلتفرم های معاملاتی
              </NavLink>
              <NavLink
                to="/admin/user"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                سوالات متداول
              </NavLink>{" "}
              <NavLink
                to="/admin/user"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                لیست شعبه ها
              </NavLink>
              <NavLink
                to="/admin/user"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                شماره حساب ها
              </NavLink>
              <NavLink
                to="/admin/contact"
                activeclassname="active"
                className="sideBarListItem"
              >
                <EmailOutlinedIcon className="sideBarIcon" />
                تماس ها
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> خدمات صبا جهاد </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                بورس اوراق بهادار
              </NavLink>{" "}
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                بورس کالا
              </NavLink>
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                آتی کالا
              </NavLink>{" "}
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                بورس انرژی
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> مدیریت منو ها</div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <NavLink
                to="/admin/function"
                activeclassname="active"
                className="sideBarListItem"
              >
                <SettingsSuggestOutlinedIcon className="sideBarIcon" />
              </NavLink>
              <NavLink
                to="/admin/category"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CategoryOutlinedIcon className="sideBarIcon" />
                .....
              </NavLink>
              <NavLink
                to="/admin/storePackage"
                activeclassname="active"
                className="sideBarListItem"
              >
                <Inventory2OutlinedIcon className="sideBarIcon" />
                ...
              </NavLink>
              <NavLink
                to="/admin/discount"
                activeclassname="active"
                className="sideBarListItem"
              >
                <DiscountOutlinedIcon className="sideBarIcon" />
                ...
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
