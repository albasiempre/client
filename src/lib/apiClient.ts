import axios from "axios";


const apiClient = axios.create({
  // awsでデプロイする際にはここを変更していく必要あり
  baseURL: "http:localhost:5050/api",
  headers: {
    "Content-type": "application/json",
  },
})

export default apiClient;