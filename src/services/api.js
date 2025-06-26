import axios from "axios";

export const api = axios.create({
  baseURL: "https://rs-api-foodexplorer.onrender.com",
});