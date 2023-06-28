import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const OrganizationalChart = () => {
  const id = "fe3d599a-b5d3-4440-a20d-33e678667154";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);
  useEffect(() => {
    dispatch(fetchsubMenuByID(id));
    // window.location.reload();
  }, []);

  console.log("Pass Data", data);
  return (
    <>
      <div className="accordionContainer" style={{ direction: "ltr" }}>
        {/* <h2 className=""> مدیران</h2> */}

        <div
          className="textBody"
          dangerouslySetInnerHTML={{
            __html: data.body,
          }}
        ></div>
      </div>
    </>
  );
};

export default OrganizationalChart;
