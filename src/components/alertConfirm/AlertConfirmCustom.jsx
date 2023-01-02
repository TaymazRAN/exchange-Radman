import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../alertDelete/alert.css";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import Button from "@mui/material/Button";
import LoadingSmall from "../loadingSmall/LoadingSmall";

export default function AlertConfirmCustom(props) {
	const submit = () => {
		confirmAlert({
			title: `ارسال درخواست`,
			message: `آیا مطمئن هستید؟`,
			overlayClassName: "confirmTestClass",
			buttons: [
				{
					label: "تایید",
					onClick: props.clickFunction,
				},
				{
					label: "انصراف",
				},
			],
		});
	};

	return (
		<>
			<Button
				color={props.color}
				onClick={submit}
				variant="outlined"
				sx={props.small ? {} : { padding: "14px 15px" }}
				className={props.customClass ? props.customClass : ""}
			>
				{props.loading ? null : <TaskAltRoundedIcon className="gridIcon" />}
				{props.text}
				{props.loading ? <LoadingSmall /> : null}
			</Button>
		</>
	);
}
