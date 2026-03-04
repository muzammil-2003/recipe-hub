import axios from "axios"

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
    timeout: 5000
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // console.log("Request Interceptor", config);
    return config;
  },
  function (error) {
    // console.log("Request Error", error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // console.log("Response Interceptor", response);
    return response;
  },
  function (error) {
    // console.log("Response Error", error);
    return Promise.reject(error);
  },
);

export default instance