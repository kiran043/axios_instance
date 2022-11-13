import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

instance.defaults.headers.common["Authorization"] = "Auth from instace11";

export default instance;
