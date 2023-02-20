import React from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const ServicesA2 = () => {
  return (
    <div className="">
      <h2> معرفی سامانه های معاملاتی </h2>
      <div className="accordionContainer">
        <div className="cardContainer">
          <div className="hollowCard">
            <h3> آنلاین پلاس</h3>
            <Button className="button yellow" variant="text" color="error">
              <NavLink to="/static/PlatformA3">ورود</NavLink>
            </Button>
            <Button className="button blue" variant="text" color="error">
              <NavLink to="/static/PlatformA3">راهنمایی</NavLink>
            </Button>
          </div>
          <div className="hollowCard">
            <h3> سامانه فروش سهام عدالت </h3>
            <Button className="button yellow" variant="text" color="error">
              <NavLink to="/static/PlatformA2">ورود</NavLink>
            </Button>
            <Button className="button blue" variant="text" color="error">
              <NavLink to="/static/PlatformA2">راهنمایی</NavLink>
            </Button>
          </div>
          <div className="hollowCard">
            <h3>سامانه معاملاتی آفلاین </h3>
            <Button className="button yellow" variant="text" color="error">
              <NavLink to="/static/PlatformA7">ورود</NavLink>
            </Button>
            <Button className="button blue" variant="text" color="error">
              <NavLink to="/static/PlatformA7">راهنمایی</NavLink>
            </Button>
          </div>
          <div className="hollowCard">
            <h3> سامانه آنلاین آتی </h3>
            <Button className="button yellow" variant="text" color="error">
              <NavLink to="/static/PlatformA6">ورود</NavLink>
            </Button>
            <Button className="button blue" variant="text" color="error">
              <NavLink to="/static/PlatformA6">راهنمایی</NavLink>
            </Button>
          </div>
        </div>
      </div>
      <div className="fullImage bours2"></div>
    </div>
  );
};

export default ServicesA2;
