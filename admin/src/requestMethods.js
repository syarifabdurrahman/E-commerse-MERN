import axios from "axios";

const BASE_URL = "https://commersejs.herokuapp.com/api/";
const TOKEN = localStorage.getItem("ACCESS_TOKEN");

console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
