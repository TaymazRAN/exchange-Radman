import axios from "axios";

const SERVER_URL = "http:// /api";

// Report

// GET
// ​/api​/Report

// GET
// ​/api​/Report​/{id}

// PUT
// ​/api​/Report​/{id}

// DELETE
// ​/api​/Report​/{id}

// GET
// ​/api​/Report​/user​/{username}

// GET
// ​/api​/Report​/user​/{username}​/field​/{id}

// POST
// ​/api​/Report​/task​/{taskId}

// GET
// ​/api​/Report​/field

// POST
// ​/api​/Report​/field

// GET
// ​/api​/Report​/field​/{id}

// PUT
// ​/api​/Report​/field​/{id}

// GET
// ​/api​/Report​/field-cat

// POST
// ​/api​/Report​/field-cat

// GET
// ​/api​/Report​/field-cat​/{id}

// PUT
// ​/api​/Report​/field-cat​/{id}

// GET
// ​/api​/Package

export const getAllpackage = () => {
  const url = `${SERVER_URL}/package`;
  return axios.get(url);
};

// POST
// ​/api​/Package
export const createPackage = (packagelist) => {
  // http:// /api/Package/category
  const url = `${SERVER_URL}/package`;
  return axios.post(url, packagelist);
};

// GET
// ​/api​/Package​/category
export const getAllcategory = () => {
  const url = `${SERVER_URL}/Package/category`;
  return axios.get(url);
};

// POST
// ​/api​/Package​/category
export const createCategory = (category) => {
  const url = `${SERVER_URL}/package`;
  return axios.post(url, category);
};

// GET
// ​/api​/Package​/{id}
export const getPackage = () => {
  const url = `${SERVER_URL}/package`;
  return axios.get(url);
};

// PUT
// ​/api​/Package​/{id}
export const updatePackage = (packagelist, packageId) => {
  const url = `${SERVER_URL}/package/${packageId}`;
  return axios.put(url, packagelist);
};

// DELETE
// ​/api​/Package​/{id}

// PUT
// ​/api​/Package​/category​/{id}
export const updateCategory = (category, CategoryID) => {
  const url = `${SERVER_URL}/package/${CategoryID}`;
  return axios.put(url, category);
};

// DELETE
// ​/api​/Package​/category​/{id}

// PUT
// ​/api​/Package​/{id}​/image
export const updatepackageImage = (category, CategoryID) => {
  const url = `${SERVER_URL}/package/${CategoryID}`;
  return axios.put(url, category);
};

// PUT
// ​/api​/Package​/{id}​/file

export const deletePackage = (contactId) => {
  const url = `${SERVER_URL}/package/${contactId}`;
  return axios.delete(url);
};

// PUT
// ​/api​/Package​/{id}​/image
export const updatepackageFile = (category, CategoryID) => {
  const url = `${SERVER_URL}/package/${CategoryID}`;
  return axios.put(url, category);
};
