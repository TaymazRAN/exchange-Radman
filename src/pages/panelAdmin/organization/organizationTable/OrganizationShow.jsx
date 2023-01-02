import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import "../../../panelPersonal/profile/profile.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import purifyDate from "../../../../services/purifyDate";
import LoadingRedux from "../../../../component/loadingRedux/LoadingRedux";
import LoadingData from "../../../../component/loadingData/LoadingData";
import { fetchOrganizations } from "../../../../features/organization/organizationSlice";
import { fetchTypes } from "../../../../features/organization/typeSlice";

export default function OrganizationShow(props) {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.organization.data);
	const dataType = useSelector((state) => state.type.data);
	// const loading = useSelector((state) => state.report.loading);
	const error = useSelector((state) => state.organization.error);
	const ready = useSelector((state) => state.organization.ready);

	useEffect(() => {
		dispatch(fetchOrganizations());
		dispatch(fetchTypes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{error !== "" || !ready ? (
				<LoadingRedux error={error} />
			) : (
				<div className="report">
					{data.length === 0 ? (
						<LoadingData />
					) : (
						<>
							{data
								.filter((item) => item.id === id)
								.map((item, i) => {
									let type = dataType.find(
										(itemFind) => itemFind.id === item.organizationCategoryId
									);

									return (
										<>
											<div className="mainPanelTitle bold">جزئیات سازمان</div>
											<div className="secondaryPanelTitle">اطلاعات کلی</div>
											<div className="textBox">
												<div className="textBoxItem">
													نام سازمان: {item.name}
												</div>
												<div className="textBoxItem">آدرس: {item.address}</div>
												<div className="textBoxItem">
													کد پستی: {item.postCode}
												</div>
												<div className="textBoxItem">
													شماره تماس: {item.contactNumber}
												</div>
												<div className="textBoxItem">
													ایمیل: {item.emailAddress}
												</div>
												<div className="textBoxItem">
													توضیحات: {item.description}
												</div>
												<div className="textBoxItem">
													اطلاعات: {item.customData}
												</div>
											</div>
											{/* <div className="secondaryPanelTitle">اطلاعات طرح</div>
											<div className="textBox">
												<div className="textBoxItem">نام طرح: {item.plan}</div>
												<div className="textBoxItem">
													تاریخ انقضا طرح: {purifyDate(item.planExpDate)}
												</div>
											</div> */}
											<div className="secondaryPanelTitle">اطلاعات دیگر</div>
											<div className="textBox">
												<div className="textBoxItem">
													نوع سازمان:
													{type && type.title}
													{!type && " وارد نشده"}
												</div>
												<div className="textBoxItem">
													کد ارجاع: {item.refrenceCode}
												</div>
												<div className="textBoxItem">
													لوگو: {item.logoFileName}
												</div>
											</div>
											<div className="profileInputContainer">
												<Button
													variant="outlined"
													component="label"
													margin="dense"
													color="error"
													onClick={(event) => navigate("/admin/organization")}
													id="logoFileName"
													sx={{ padding: "15px 0", marginTop: "4px" }}
													fullWidth
												>
													بازگشت
												</Button>
											</div>
										</>
									);
								})}
						</>
					)}
				</div>
			)}
		</>
	);
}
