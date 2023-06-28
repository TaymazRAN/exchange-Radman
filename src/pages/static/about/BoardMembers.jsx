import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const BoardMembers = () => {
  const id = "5b8740fd-0f8f-40eb-b590-39105069b347";
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

export default BoardMembers;
