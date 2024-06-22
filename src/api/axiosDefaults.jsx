import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true

export const axiosReq = axios.create() // catches requests

