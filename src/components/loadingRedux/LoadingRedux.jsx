import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loadingRedux.css";

const LoadingRedux = (props) => {
  return (
    <>
      {props.error !== "" ? (
        <div className="errorBox">
          <span>{props.error}</span>
        </div>
      ) : (
        <div className="loadBody">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default LoadingRedux;
