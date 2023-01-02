import axios from "axios";
import configData from "./config.json";
// User

// GET
// ​/api​/User

// POST
// ​/api​/User​/login

// POST
// ​/api​/User​/register

// GET
// ​/api​/User​/{username}

// PUT
// ​/api​/User​/{username}

// PUT
// ​/api​/User​/{username}​/image

// GET
// ​/api​/User​/public​/{username}

// GET
// ​/api​/User​/manuscript​/{username}

// GET
// ​/api​/User​/last-report-date​/{username}

export const getUserByUsername = (username) => {
	const url = `${configData.AddressApi}/User/${username}`;
	return axios.get(url);
};
