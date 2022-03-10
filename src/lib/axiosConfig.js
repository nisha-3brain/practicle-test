import axios from "axios";

let domainUrl = process.env.REACT_APP_API_BASE_URL;

const apiInstance = axios.create({
  baseURL: domainUrl,
  timeout: 1000 * 60 * 1.5,
});

export default apiInstance;
