
import { axios } from "./../../core/index";

const rootUrl = 'https://jivandeep.herokuapp.com/';
// https://jivandeep.herokuapp.com/api/profile/

let info = localStorage.getItem('token') ;
export default {
  signIn: (postData) => axios.post(`${rootUrl}api/users/login`,postData),
  signUp: postData => axios.post("/user/signup", postData),
  verifyHash: hash => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get(`${rootUrl}api/profile/`),
  updateProfile: (putData) => axios.put(`${rootUrl}api/profile/editProfile`,putData)
};