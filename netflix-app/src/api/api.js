import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c3531c0fd9611d97111b750a606e8fdb",
    language: "ko-KR",
  },
});
export default instance;
