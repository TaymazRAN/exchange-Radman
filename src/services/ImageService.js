import axios from "axios";
import configData from "./config.json";

export const uploadStorePackageImage = (id, image) => {
  const url = `${configData.AddressApi}/StorePackage/${id}/icon`;
  return axios.put(url, image, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const uploadStorePackageBackgroundImage = (id, image) => {
	const url = `${configData.AddressApi}/StorePackage/${id}/background`;
	return axios.put(url, image, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const uploadCategoryImage = (id, image) => {
	const url = `${configData.AddressApi}/StorePackage/category/${id}/image`;
	return axios.put(url, image, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const uploadManagerImage = (username, image) => {
	const url = `${configData.AddressApi}/identity/manager/${username}/image`;
	return axios.put(url, image, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const uploadUserImage = (username, image) => {
	const url = `${configData.AddressApi}/User/${username}/image`;
	return axios.put(url, image, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};