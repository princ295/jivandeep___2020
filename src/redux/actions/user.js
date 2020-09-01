import { userApi } from "../../utils/api/index";
import axios from "axios";

const Actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserData: () => dispatch => {
    userApi
      .getMe()
      .then(( data ) => {
        console.log(data)
        dispatch(Actions.setUserData(data));
      })
      .catch(err => {
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data;
        // openNotification({
        //   title: 'tittle of notification'',
        //   text: 'your login in sucess fully...',
        //   type: 'success',
        // });
        axios.defaults.headers.common['token'] = token;
        localStorage['token'] = token;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        // openNotification({
        //   title: 'tittle of notification',
        //   text: 'your login fail...',
        //   type: 'error',
        // });
      });
  },
  fetchUserRegister: postData => () => {
    return userApi.signUp(postData);
  },
};

export default Actions;