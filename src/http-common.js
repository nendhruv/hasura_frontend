import axios from "axios";

export default axios.create({
  baseURL: "https://shrouded-escarpment-74639.herokuapp.com/api",
  // baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
