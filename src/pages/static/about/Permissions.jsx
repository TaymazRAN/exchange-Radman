import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const Permissions = () => {
  const id = "2ee54c0e-5b3b-475d-bb2e-7ffafbbe36df";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);
  useEffect(() => {
    dispatch(fetchsubMenuByID(id));
    // window.location.reload();
  }, []);

  console.log("Pass Data", data);
  return (
    <div className="page">
      <h2> افتخارات و مجوز ها </h2>
      <div
        className="textBody"
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      ></div>
    </div>
  );
};

export default Permissions;
