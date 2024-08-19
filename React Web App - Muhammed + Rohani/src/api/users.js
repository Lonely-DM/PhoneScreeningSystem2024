import ky from "ky";

const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

export const createUser = (user) => ky.post(`${REACT_APP_BACKEND_ENDPOINT}/users`, { json: user }).json();
