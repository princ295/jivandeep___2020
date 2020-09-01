import React from 'react';
import {BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import Profile from './pages/profile/profile';
import NotFound from '././components/NotFound/NotFound';
import dashboard from '././pages/dashboard/dashboard';
import ProfileAccount from '././pages/MyProfileAccount/ProfileAccount';
import EditUser from '././components/EditProfile/editProfile';
import kidneyTransplat from '../src/pages/kidneyTransplant/kidneyTransplat';
import Family from '././components/Family/Family';
import Newpassword from './components/Newpassword/Newpassword';

const Routes = () => (
  <Router >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/Createprofile" component={Profile}/>
          <Route path="/ProfileAccount" component={ProfileAccount}/>
          <Route path="/dashboard" component={dashboard}/>
          <Route path="/edituser" component={EditUser}/>
          <Route path="/KidneyTransplat" component={kidneyTransplat}/>
          <Route path="/family" component={Family}/>
          <Route path="/newpassword" component={Newpassword}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </Router>
);

export default Routes;