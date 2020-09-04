import React from 'react';

import {BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';
import { Welcome, Login, Signup, Dashboard } from "./page/index";

//redux
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { EditProfile, Profile, ProfileInfo} from "./component/index";



// ******* profile 
//profile component : is for create profile
//edit profile : is for update account
//profileinfo : is for to see data which is insterd at time of creation and update also

function App (props){
  return (
    <Provider store={store}> 

        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Signup}/>
          <Route  path="/dashboard" component={Dashboard}/>
          <Route path="/profileinfo" component={ProfileInfo}/>
          <Route  path="/editprofile" component={EditProfile}/>
        </Switch>

    </Provider>
  );
}

export default App;