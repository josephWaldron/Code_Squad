import axios from "axios";

const backendClient = axios.create({
  baseURL: "https://code-squad-backend.vercel.app/",
});

export default backendClient;
