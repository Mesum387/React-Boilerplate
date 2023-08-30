import axios from "axios";
import { save_tokens_constant, session_expired } from "../../../store/constant";


export const exit_session = () => {
  localStorage.removeItem(save_tokens_constant);
  localStorage.setItem(session_expired, true);
  window.location.reload();
};
export const baseURL = `https://north-rider-backend-2023-2ac56086bf6d.herokuapp.com`;

export const apiHandle = axios.create({
  baseURL: `${baseURL}`,
});

axios.defaults.timeout = 15000;

apiHandle.interceptors.request.use(async (req) => {
  const authToken = localStorage.getItem(save_tokens_constant) || null


  if (authToken) {
    console.log("haan bhai",`Bearer ${authToken}`);
    req.headers.Authorization = `Bearer ${authToken}`;
  }

  return req;
});
