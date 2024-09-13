import ky from "ky";

const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

export const createUser = (user) =>
  ky.post(`${REACT_APP_BACKEND_ENDPOINT}/users`, { credentials: "include", json: user }).json();

export const setTotp = () => ky.put(`${REACT_APP_BACKEND_ENDPOINT}/users/totp`, { credentials: "include" }).json();
