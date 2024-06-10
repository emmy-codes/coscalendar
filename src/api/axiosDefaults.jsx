import axios from "axios";

axios.defaults.baseURL = "https://coscalendar-api-3bdc9b15f518.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create(); // catches requests
export const axiosRes = axios.create(); // catches responses

