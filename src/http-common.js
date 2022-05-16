import axios from "axios";

export default axios.create({
  // baseURL: "https://b32c-182-64-93-196.ngrok.io/api",
  // baseURL: "http://15.207.202.9:8080/api",
  baseURL: "http://localhost:8080/api",
  // baseURL: "http://13.126.118.201:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
