import React from 'react';

import {BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';
import { Welcome, Login, Signup, Dashboard } from "./page/index";

//redux
import { Provider } from "react-redux";
import store from "../src/redux/store";


function App (props){
  return (
    <Provider store={store}> 

        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Signup}/>
          <Route  path="/dashboard" component={Dashboard}/>
        </Switch>

    </Provider>
  );
}

export default App;