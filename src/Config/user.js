import Axios from "axios";

const baseUrl = "http://192.168.6.180:9600/v1/api/user";

export const loginUser = (email, password) => {
  return Axios.post(`${baseUrl}/login`, {
    email,
    password
  });
};
