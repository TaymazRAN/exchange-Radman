import React, { useEffect } from "react";
import ComplementTypeTable from "../complementType/ComplementTypeTable";
import ComplementValueTable from "../complementValue/ComplementValueTable";
import TypeTable from "../type/TypeTable";
import { useDispatch } from "react-redux";
import { fetchTypes } from "../../../../features/organization/typeSlice";
import { fetchOrganizations } from "../../../../features/organization/organizationSlice";
import { fetchComplementTypes } from "../../../../features/organization/complementTypeSlice";
import { fetchComplementValues } from "../../../../features/organization/complementValueSlice";

const OrganizationInfo = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchOrganizations());
		dispatch(fetchTypes());
		dispatch(fetchComplementTypes());
		dispatch(fetchComplementValues());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<TypeTable />
			<ComplementTypeTable />
			<ComplementValueTable />
		</div>
	);
};

export default OrganizationInfo;
