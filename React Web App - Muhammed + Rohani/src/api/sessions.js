import ky from "ky";

const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

export const createSession = (loginDetails) =>
  ky.post(`${REACT_APP_BACKEND_ENDPOINT}/sessions`, { credentials: "include", json: loginDetails }).json();

export const verifySession = () => ky.get(`${REACT_APP_BACKEND_ENDPOINT}/sessions`, { credentials: "include" }).json();

export const verifyAuthentication = (body) =>
  ky
    .post(`${REACT_APP_BACKEND_ENDPOINT}/sessions/verify-authentication`, { credentials: "include", json: body })
    .json();
