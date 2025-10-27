import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_HOST}/api`,
  baseURL: `http://localhost:8080/api`,
  withCredentials: true,
});
