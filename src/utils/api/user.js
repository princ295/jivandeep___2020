
import { axios } from "./../../core/index";

const rootUrl = 'https://jivandeep.herokuapp.com/';
// https://jivandeep.herokuapp.com/api/profile/

let info = localStorage.getItem('token') ;
export default {
  signIn: (postData) => axios.post(`${rootUrl}api/users/login`,postData),
  signUp: postData => axios.post(`https://jivandeep.herokuapp.com/api/users/register`, postData),
  registerprofile: postData => axios.post(`${rootUrl}api/profile/fillProfile`, postData),
  getMe: () => axios.get(`${rootUrl}api/profile/`),
  updateProfile: (putData) => axios.put(`${rootUrl}api/profile/editProfile`,putData)
};