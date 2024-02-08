import axios from "axios";

const server = axios.create({
  baseURL: "https://global-traders.onrender.com",
});

export default server;
