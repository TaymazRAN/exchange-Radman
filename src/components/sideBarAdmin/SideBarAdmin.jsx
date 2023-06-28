import "./sideBarAdmin.css";
import React from "react";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AppsIcon from "@mui/icons-material/Apps";
// import CorporateFareIcon from "@mui/icons-material/CorporateFare";
// import InventoryIcon from "@mui/icons-material/Inventory";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
// import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { Button } from "@mui/material";

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
  const navigate = useNavigate();
  const listMenu = [
    "About", //0
    "Platform",
    "Momelat",
    "Question_Landing",
    "landing",
    "About_Chart",
    "About_Member",
    "menu_AtiKala",
    "Question_AtiKala",
    "MenuBoursKala",
    "MenuBoursEnerji",
    "SupportQuestion",
    "Branch",
    "Platform",
    "TaminMali", //14
    "Sandog_Sarmayegozari", //15
    "Arze_Paziresh_Sherkat", //16
    "Tamin_Mali_Jamei", //17
    "Common_Question_BoursOrag", //18
    "Menu_Bours_orga", //19
    "bourse_Energi", //20
    "Bours_Kala", //21
    "Ati_Kala", //22
    "Ati_Kala_Question", //23
    "Connect_Branch", //24
    "Connect_Account", //25
    "Connect_Support", //26
  ];
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> مدیریت صفحه اصلی </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <NavLink
                  to="/admin/"
                  activeclassname="active"
                  className="sideBarListItem"
                >
                  <HomeRoundedIcon className="sideBarIcon" />
                  داشبورد
                </NavLink>
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[4]}`)
                  }
                >
                  مدیریت منوها
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[3]}`)
                  }
                >
                  سوالات متدوال
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordionSide" sx={accordionStyle}>
          <div className="sideBarTitle bold">
            {" "}
            <Button
              className="gridButton"
              color="info"
              onClick={(event) => navigate(`/admin/subMenuList/${listMenu[0]}`)}
            >
              مدیریت منو درباره ما
            </Button>
          </div>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel21"}
          onChange={handleChange("panel21")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> خدمات - بورس اوراق </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[19]}`)
                  }
                >
                  منوی بورس اوراق بهادار
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[14]}`)
                  }
                >
                  خدمات - تامین مالی
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[15]}`)
                  }
                >
                  صندوق سرمایه گذاری
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[16]}`)
                  }
                >
                  عرضه و پذیرش شرکت
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[17]}`)
                  }
                >
                  تامین مالی جمعی
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[18]}`)
                  }
                >
                  سوالات متدوال اوراق
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel23"}
          onChange={handleChange("panel23")}
          sx={accordionStyle}
        >
          <div className="sideBarTitle bold">
            {" "}
            <Button
              className="gridButton"
              color="info"
              onClick={(event) =>
                navigate(`/admin/subMenuList/${listMenu[21]}`)
              }
            >
              خدمات - بورس کالا
            </Button>
          </div>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel23"}
          onChange={handleChange("panel23")}
          sx={accordionStyle}
        >
          <div className="sideBarTitle bold">
            {" "}
            <Button
              className="gridButton"
              color="info"
              onClick={(event) =>
                navigate(`/admin/subMenuList/${listMenu[20]}`)
              }
            >
              خدمات - بورس انرژی
            </Button>
          </div>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel14"}
          onChange={handleChange("panel14")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> خدمات - آتی کالا </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[23]}`)
                  }
                >
                  سوالات - آتی کالا
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[22]}`)
                  }
                >
                  مدیریت آتی کالا
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel29"}
          onChange={handleChange("panel29")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ارتباط با ما </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[24]}`)
                  }
                >
                  شعب و دفاتر
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[25]}`)
                  }
                >
                  شماره حساب ها
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/SubMenulistDynamic/${listMenu[26]}`)
                  }
                >
                  تماس با پشتیبانی
                </Button>
                {/* <WidgetsRoundedIcon className="sideBarIcon" /> */}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
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
        </Accordion> */}
      </div>
    </div>
  );
}
