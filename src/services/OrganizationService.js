import axios from "axios";
import configData from "./config.json";

export const getOrganizationById = (id) => {
	const url = `${configData.AddressApi}/Organization/${id}`;
	return axios.get(url);
};

export const getOrganizationByIdAuth = (id, token) => {
	const url = `${configData.AddressApi}/Organization/${id}`;
	return axios.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};