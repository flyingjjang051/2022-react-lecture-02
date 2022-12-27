import axios from "axios";
const BASE_URL = "http://localhost:5000/";

const axiosAPI = axios.create({ baseURL: BASE_URL });
export default axiosAPI;
