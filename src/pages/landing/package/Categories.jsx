import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuTop from "../../../component/menuTop/MenuTop";
import Footer from "../../../component/footer/Footer";
import "./package.css";
import PackageCreator from "./StorePackages";
import { fetchCategorys } from "../../../features/package/categorySlice";
import { fetchStorePackages } from "../../../features/package/storePackageSlice";
// import { storePackageActions } from "../../../features/package/storePackageSlice";
// import SnackAlert from "../../../component/snackAlert/SnackAlert";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
// import { useNavigate } from "react-router-dom";

export default function Categories() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	const dataStorePackage = useSelector((state) => state.storePackage.data);
	const dataCategory = useSelector((state) => state.category.data);
	// const handleLoading = useSelector((state) => state.category.handleLoading);
	const error = useSelector((state) => state.category.error);
	// const handleError = useSelector((state) => state.category.handleError);
	const ready = useSelector((state) => state.category.ready);

	// const [successAlert, setSuccessAlert] = useState(false);
	// const [successText, setSuccessText] = useState("");
	// const handleOpenSuccess = (text) => {
	// 	setSuccessText(text);
	// 	setSuccessAlert(true);
	// };

	// const handleCloseSuccess = () => {
	// 	setSuccessAlert(false);
	// };

	// const [errorAlert, setErrorAlert] = useState(false);
	// const [errorText, setErrorText] = useState("");

	// const handleOpenError = (text) => {
	// 	setErrorText(text);
	// 	setErrorAlert(true);
	// };

	// const handleCloseError = () => {
	// 	setErrorAlert(false);
	// };

	useEffect(() => {
		dispatch(fetchCategorys());
		dispatch(fetchStorePackages());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// useEffect(() => {
	// 	if (handleError === "success") {
	// 		handleOpenSuccess("عملیات با موفقیت انجام شد");
	// 		setTimeout(() => {
	// 			navigate(`/admin/storePackage`);
	// 			dispatch(storePackageActions.clearHandleError());
	// 		}, 1500);
	// 	} else if (handleError !== "success" && handleError !== "") {
	// 		handleOpenError("عملیات با مشکل مواجه شد");
	// 		dispatch(storePackageActions.clearHandleError());
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [handleError]);

	const [expanded, setExpanded] = useState(false);

	// end useefect

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const accordionStyle = {
		boxShadow: "0 2px 5px #dddddd",
		"&.MuiAccordion-root:before": {
			backgroundColor: "transparent",
		},
	};

	const summaryStyle = {
		flexDirection: "column",
		"@media screen and (max-width: 800px)": {
			flexDirection: "row",
		},
	};

	return (
		<div>
			<MenuTop />
			<div className="packageLand">
				<>
					{/* <SnackAlert
						props={{
							successAlert,
							handleCloseSuccess,
							successText,
							errorAlert,
							handleCloseError,
							errorText,
						}}
					/> */}

					{error !== "" || !ready ? (
						<LoadingRedux error={error} />
					) : (
						<div className="categoryContainer">
							{dataCategory.map((data, i) => (
								<Accordion
									key={i}
									className="accordion"
									sx={accordionStyle}
									expanded={expanded === `panel${data.id}`}
									onChange={handleChange(`panel${data.id}`)}
								>
									<AccordionSummary
										sx={summaryStyle}
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1bh-content"
										id="panel1bh-header"
									>
										<div
											className="categoryPicture"
											style={
												data.imageId !== "" && {
													backgroundImage: `url("http://beta843.psyport.agahpadidar.com/image/${data.imageId}")`,
												}
											}
										></div>

										<Typography
											sx={{ width: "100%", flexShrink: 0, textAlign: "left" }}
										>
											<span className="categoryTitle bold">{data.name}</span>
											<span className="categoryDescription">
												{data.description}
											</span>
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<PackageCreator
											data={dataStorePackage.filter(
												(item) => item.categoryId === data.id
											)}
										/>
									</AccordionDetails>
								</Accordion>
							))}
						</div>
					)}
				</>
			</div>
			<Footer />
		</div>
	);
}
