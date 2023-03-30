import axios from "axios";

const backendClient = axios.create({
  baseURL: "http://localhost:3001",
});

export default backendClient;
