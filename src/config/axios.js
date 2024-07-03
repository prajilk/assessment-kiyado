import axios from "axios";

// Axios config with server URL (http://localhost:3000)
export default axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
});