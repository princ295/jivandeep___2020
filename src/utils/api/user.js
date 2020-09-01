// import { axios } from "core";

import axios from "axios";

const rootUrl = 'https://jivandeep.herokuapp.com/';
// https://jivandeep.herokuapp.com/api/profile/

let info = localStorage.getItem('token') ;
export default {
  signIn: (postData) => axios.post(`${rootUrl}api/users/login`,postData),
  signUp: postData => axios.post("/user/signup", postData),
  verifyHash: hash => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get(`${rootUrl}api/profile/`,{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Content-type': 'application/json;charset=UTF-8',
        'Authorization': info// 'Bearer '+
       },
    }),
  findUsers: query => axios.get("/user/find?query=" + query)
};