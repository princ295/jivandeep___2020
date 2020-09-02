import { userApi } from "../../utils/api/index";


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
      }).then((res)=>{
        console.log(res)
      })
      .catch(err => {
        console.log(err)
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
        console.log(data)
        const { token } = data;
        // openNotification({
        //   title: 'tittle of notification'',
        //   text: 'your login in sucess fully...',
        //   type: 'success',
        // });

        window.axios.defaults.headers.common['token'] = token;
        window.localStorage['token'] = token;
        window.axios.defaults.headers.common["Authorization"] = token;
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