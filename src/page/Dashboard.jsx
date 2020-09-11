import React from "react";

import { Loading, Header, Home, Hello, Profile, Dashboardlayout, EditProfile, ProfileInfo} from "../component/index";
import { NavLink, Switch ,Route, Link } from 'react-router-dom';

import { userApi } from "../utils/api/index";
import { useEffect } from "react";

const Dashboard = ({match}) => {

  const getMe = () => {
    userApi.getMe()
  }

  useEffect(()=>{
   const __ = unescape(atob((localStorage.getItem('logged_'))))

    console.log(JSON.parse(__))
  },[])

  return (
    <div>
      <Header match="/dashboard"/>
      {/* Main content */}
      <div className="main-content" id="panel">
        {/* Topnav */}
        <Home/>
        {/* <Link to={`${match.path}/`}>Profie</Link>
        <Link to={`${match.path}/hello`}>Hello</Link>
        <Link to={`${match.path}/profile`}>Profie</Link> */} 


        <Switch>
          <Route path={`${match.path}/create`} component={Profile}/>
          <Route path={`${match.path}/profile`} component={ProfileInfo}/>
          <Route path={`${match.path}/`} component={Dashboardlayout}/>
        </Switch>

        <div className="container-fluid mt--6">
        </div>
      </div>
    </div>
  );
}

export default Dashboard;