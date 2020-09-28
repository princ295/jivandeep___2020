import { userApi } from "../../utils/api/index";

import { store } from 'react-notifications-component';

const Actions = {

  //dispatch object to update reducer initial state
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),

  //fetch logged user profile data
  fetchUserData: () => dispatch => {
    return userApi
      .getMe()
      .then(( data ) => {
        console.log(data.data)
        console.log('---------===========--------')
        const enc = btoa(escape(JSON.stringify(data.data)))

        localStorage.setItem('logged_',enc)
        dispatch(Actions.setUserData(data));
  
      })
      // .then((res)=>{
      //   console.log(res)
      // })
      .catch(err => {
        console.log(err)
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  //update profile request
  fetchUpdateData: putdata => () =>{
    return userApi
      .updateProfile(putdata)
      .then((data) => {
        console.log(data)
        console.log(data)
        return data
      })
      .catch(( err) => {
        // openNotification({
        //   title: 'tittle of notification',
        //   text: 'your login fail...',
        //   type: 'error',
        // });
        console.log(err)
      });
  },
  //login request 
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        console.log(data)
        const { token } = data;

        store.addNotification({
          title: "Login Sucessfully..!",
          message: "your login sucessfully",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });

        window.axios.defaults.headers.common['token'] = token;
        window.localStorage['token'] = token;
        window.axios.defaults.headers.common["Authorization"] = token;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {

        store.addNotification({
          title: "Login Fail!",
          message: "login fail please check Eamil & Password and try once again",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      });
  },
  //register end user using(username, email, password, password2)
  fetchUserRegister: postData => () => {
    return userApi
    .signUp(postData)
      .then(res=>{
        store.addNotification({
          title: "Registration Sucessfully..!",
          message: "your register sucessfully",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }

        }); 
        return res
      }).catch(res=>console.log(res));
  },
  //register create new profile 
  fetchCreteProfile: postData => () =>{
    //api call
    return userApi.registerprofile(postData)
  }
};

export default Actions;