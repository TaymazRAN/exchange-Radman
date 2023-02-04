import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import {
  fetchAllSubMenu,
  subMenuActions,
  suspendsubMenu,
} from "../../../features/account/subMenuSlice";

const SubMenuList = () => {
  // const organid = JSON.parse(localStorage.getItem("organid"));
  const data = useSelector((state) => state.subMenu.data);
  console.log(data);
  const handleLoading = useSelector((state) => state.subMenu.handleLoading);
  const error = useSelector((state) => state.subMenu.error);
  const handleError = useSelector((state) => state.subMenu.handleError);
  const ready = useSelector((state) => state.subMenu.ready);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successAlert, setSuccessAlert] = useState(false);
  const [successText, setSuccessText] = useState("");
  const handleOpenSuccess = (text) => {
    setSuccessText(text);
    setSuccessAlert(true);
  };

  const handleCloseSuccess = () => {
    setSuccessAlert(false);
  };

  const [errorAlert, setErrorAlert] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleOpenError = (text) => {
    setErrorText(text);
    setErrorAlert(true);
  };

  const handleCloseError = () => {
    setErrorAlert(false);
  };

  useEffect(() => {
    // dispatch(fetchOrganizationManagers(organid));
    dispatch(fetchAllSubMenu());
    console.log("data", data);
  }, []);

  useEffect(() => {
    if (handleError === "success") {
      handleOpenSuccess("عملیات با موفقیت انجام شد");
      setTimeout(() => {
        navigate(`/admin/subMenu`);
        dispatch(subMenuActions.clearHandleError());
      }, 1500);
    } else if (handleError !== "success" && handleError !== "") {
      handleOpenError("عملیات با مشکل مواجه شد");
      dispatch(subMenuActions.clearHandleError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleError]);

  const columns = [
    {
      field: "title",
      headerName: "موضوع",
      flex: 1,
    },

    {
      field: "body",
      headerName: "body",
      flex: 1,
    },

    // {
    //   field: "isExecutive",
    //   headerName: "نوع مدیر",
    //   flex: 1,
    //   renderCell: (parameters) => {
    //     return (
    //       <div className="dataGridCell">
    //         {parameters.row.isExecutive ? "مدیر اصلی" : "مدیر عادی"}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "action",
      headerName: "امکانات",
      flex: 1,
      minWidth: 330,
      renderCell: (parameters) => {
        return (
          <div className="dataGridCell">
            <Button
              className="gridButton"
              color="info"
              onClick={(event) =>
                navigate(`/admin/subMenuEdit/${parameters.id}`)
              }
            >
              <EditOutlinedIcon className="gridIcon" />
              ویرایش
            </Button>
            <AlertDeleteRedux
              titleMessage=" مدیریت منوهای سایت "
              nameMessage={parameters.row.title}
              clickFunction={(event) => {
                dispatch(suspendsubMenu(parameters.id));
              }}
              loading={handleLoading}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="CustomGrid" style={{ width: "96%", height: "95%" }}>
      <SnackAlert
        props={{
          successAlert,
          handleCloseSuccess,
          successText,
          errorAlert,
          handleCloseError,
          errorText,
        }}
      />

      <div className="topButtonContainer">
        <Button
          className="topButton"
          variant="outlined"
          color="success"
          onClick={(event) => navigate("/admin/subMenuAdd")}
        >
          اضافه کردن <AddIcon className="topButtonIcon" />
        </Button>
      </div>

      <div style={{ height: 450 }}>
        <>
          {error !== "" || !ready ? (
            <LoadingRedux error={error} />
          ) : (
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[7]}
              checkboxSelection
              disableSelectionOnClick
              sx={{ color: "#2C3333", fontSize: "13px" }}
              pagination
              components={{ Toolbar: GridToolbar }}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default SubMenuList;
