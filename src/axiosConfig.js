import axios from "axios";
const AxiosConfig = axios.create({
  baseURL: "https://coralmango.com",
  headers: {
    "Content-type": "application/json",
  },
});
export default AxiosConfig;
