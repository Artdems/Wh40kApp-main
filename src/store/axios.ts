import axios from 'axios';
import Config from "react-native-config";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: Config.BASE_URL,
});

export default axiosInstance;
